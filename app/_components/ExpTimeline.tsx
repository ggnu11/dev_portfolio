"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { flushSync } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";
import SkillItem from "./skill/SkillItem";
import { useI18n } from "@/i18n/context";

type Skill = {
  id: number;
  item: string;
  blobUrl: string;
  category: string;
};

type Link = {
  href: string;
  label: string;
};

type ExpEntry = {
  id: number;
  title: string;
  subTitle?: string | null;
  period: string;
  items: string[];
  links: Link[];
  isActive?: boolean | null;
  skills: Skill[];
  category: "WORK" | "PROJECT";
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const WHEEL_THRESHOLD = 60;

function parsePeriod(period: string) {
  const m = period.match(/(\d{4})\.?(\d{2})?/);
  const year = m?.[1] ?? "0000";
  const month = m?.[2] ?? "01";
  return { year, month, sort: `${year}.${month}` };
}

export default function ExpTimeline({ entries }: { entries: ExpEntry[] }) {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);

  const sorted = [...entries].sort((a, b) =>
    parsePeriod(a.period).sort.localeCompare(parsePeriod(b.period).sort)
  );

  const [isUnfolded, setIsUnfolded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleUnfold = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsUnfolded(true);
    // Animation completes after stagger
    setTimeout(() => setIsAnimating(false), 600 + sorted.length * 100);
  }, [isAnimating, sorted.length]);

  const handleFold = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    const section = document.getElementById("experience");
    if (!section) {
      setIsUnfolded(false);
      setIsAnimating(false);
      return;
    }

    // 1. While still unfolded, smoothly scroll to experience section
    const targetY = section.getBoundingClientRect().top + window.scrollY
      - parseFloat(getComputedStyle(section).scrollMarginTop || "0");
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.3));
    const startTime = performance.now();
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // 2. Arrived — now collapse to reel
        flushSync(() => {
          setIsUnfolded(false);
        });
        // Keep scroll at same position after collapse
        window.scrollTo(0, targetY);
        setTimeout(() => setIsAnimating(false), 400);
      }
    };
    requestAnimationFrame(step);
  }, [isAnimating]);

  return (
    <div ref={sectionRef}>
      <AnimatePresence mode="wait" initial={false}>
        {!isUnfolded ? (
          <motion.div
            key="reel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.02,
              transition: { duration: 0.3, ease: EASE },
            }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <ReelView entries={sorted} t={t} onUnfold={handleUnfold} />
          </motion.div>
        ) : (
          <motion.div
            key="unfolded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE } }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <UnfoldedView
              entries={sorted}
              t={t}
              onFold={handleFold}
              isAnimating={isAnimating}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   REEL VIEW
   ═══════════════════════════════════════════════ */
function ReelView({
  entries,
  t,
  onUnfold,
}: {
  entries: ExpEntry[];
  t: ReturnType<typeof useI18n>["t"];
  onUnfold: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const wheelAccum = useRef(0);
  const total = entries.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      if (!isHovered) return;
      e.preventDefault();
      wheelAccum.current += e.deltaY;
      if (Math.abs(wheelAccum.current) >= WHEEL_THRESHOLD) {
        const dir = wheelAccum.current > 0 ? -1 : 1;
        wheelAccum.current = 0;
        setFocusedIndex((prev) => {
          const next = prev + dir;
          if (next < 0 || next >= total) return prev;
          return next;
        });
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [isHovered, total]);

  const focusedEntry = entries[focusedIndex];
  const side: "left" | "right" = focusedIndex % 2 === 0 ? "left" : "right";

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover bg — outside overflow-hidden so it bleeds naturally */}
      <motion.div
        className="absolute -inset-10 pointer-events-none rounded-[60px]"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(var(--foreground-rgb), 0.2) 0%, rgba(var(--foreground-rgb), 0.08) 40%, transparent 70%)",
        }}
      />

      <div
        ref={containerRef}
        className="relative h-[65vh] md:h-[55vh] overflow-hidden"
      >

      <div className="relative h-full flex items-center">
        {/* Left card */}
        <div className="flex-1 flex justify-end pr-6 md:pr-10">
          <AnimatePresence mode="wait">
            {side === "left" && (
              <motion.div
                key={focusedEntry.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <CompactCard entry={focusedEntry} side="left" t={t} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Center: 3D Film Reel — fully transparent */}
        <div className="relative w-28 md:w-36 shrink-0 flex items-center justify-center">
          {/* Sprocket holes */}
          {[-26, 20].map((offset, si) => (
            <div
              key={si}
              className="absolute inset-y-0 flex flex-col justify-between py-8"
              style={{ left: "50%", transform: `translateX(${offset}px)` }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-3 rounded-[1px] bg-foreground/[0.04]"
                />
              ))}
            </div>
          ))}

          {/* 3D rotating reel — no background, no masks */}
          <div
            className="relative w-full h-56 md:h-64"
            style={{ perspective: "400px" }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateX: -focusedIndex * 45 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              {entries.map((entry, idx) => {
                const accentRgb = getAccent(entry.category);
                const { year, month } = parsePeriod(entry.period);
                const offset = idx - focusedIndex;

                return (
                  <button
                    key={entry.id}
                    className="absolute flex flex-col items-center justify-center w-full cursor-pointer"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateX(${idx * 45}deg) translateZ(100px)`,
                      backfaceVisibility: "hidden",
                    }}
                    onClick={() => setFocusedIndex(idx)}
                  >
                    <span
                      className="text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300"
                      style={{
                        color:
                          offset === 0
                            ? `rgba(${accentRgb}, 0.9)`
                            : `rgba(var(--foreground-rgb), ${Math.max(0.08, 0.25 - Math.abs(offset) * 0.08)})`,
                      }}
                    >
                      {year}
                    </span>
                    <span
                      className="text-[10px] md:text-xs mt-0.5 transition-colors duration-300"
                      style={{
                        color:
                          offset === 0
                            ? `rgba(${accentRgb}, 0.5)`
                            : `rgba(var(--foreground-rgb), ${Math.max(0.05, 0.15 - Math.abs(offset) * 0.05)})`,
                      }}
                    >
                      .{month}
                    </span>
                    {entry.isActive && offset === 0 && (
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full mt-1.5"
                        style={{
                          backgroundColor: `rgba(${accentRgb}, 0.8)`,
                          boxShadow: `0 0 10px rgba(${accentRgb}, 0.4)`,
                        }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Frame counter */}
          <span className="absolute bottom-4 text-[8px] text-foreground/15">
            {focusedIndex + 1} / {total}
          </span>
        </div>

        {/* Right card */}
        <div className="flex-1 flex justify-start pl-6 md:pl-10">
          <AnimatePresence mode="wait">
            {side === "right" && (
              <motion.div
                key={focusedEntry.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <CompactCard entry={focusedEntry} side="right" t={t} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Unfold button */}
      <button
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-primary/15 text-primary border border-primary/25 hover:bg-primary/25 hover:border-primary/40 z-20"
        onClick={onUnfold}
      >
        ↓ {t.experience.viewDetails}
      </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   UNFOLDED VIEW — film strip unrolled
   ═══════════════════════════════════════════════ */
function UnfoldedView({
  entries,
  t,
  onFold,
  isAnimating,
}: {
  entries: ExpEntry[];
  t: ReturnType<typeof useI18n>["t"];
  onFold: () => void;
  isAnimating: boolean;
}) {
  const totalEntries = entries.length;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Center film strip — unrolling from top */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 md:w-20 pointer-events-none">

        {/* Sprocket holes — stagger from top */}
        {["left-1", "right-1"].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} top-0 bottom-0 flex flex-col justify-between py-4`}
          >
            {Array.from({ length: Math.max(totalEntries * 3, 12) }).map(
              (_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-3 rounded-[1px] bg-foreground/[0.04]"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.025,
                    duration: 0.25,
                    ease: EASE,
                  }}
                />
              )
            )}
          </div>
        ))}
      </div>

      {/* Entries — sequential reveal */}
      <div className="relative flex flex-col">
        {entries.map((entry, idx) => (
          <UnfoldedEntry
            key={entry.id}
            entry={entry}
            index={idx}
            side={idx % 2 === 0 ? "left" : "right"}
            t={t}
          />
        ))}
      </div>

      {/* Fold button */}
      <motion.div
        className="relative flex justify-center py-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3 + totalEntries * 0.1,
          duration: 0.5,
          ease: EASE,
        }}
      >
        <button
          onClick={onFold}
          disabled={isAnimating}
          className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-primary/15 text-primary border border-primary/25 hover:bg-primary/25 hover:border-primary/40 disabled:opacity-30"
        >
          ↑ {t.experience.hideDetails}
        </button>
      </motion.div>
    </div>
  );
}

function UnfoldedEntry({
  entry,
  index,
  side,
  t,
}: {
  entry: ExpEntry;
  index: number;
  side: "left" | "right";
  t: ReturnType<typeof useI18n>["t"];
}) {
  const accentRgb = getAccent(entry.category);
  const categoryLabel =
    entry.category === "WORK" ? t.experience.work : t.experience.project;
  const { year, month } = parsePeriod(entry.period);

  // Each entry appears sequentially — "unrolling" delay
  const entryDelay = 0.15 + index * 0.1;

  return (
    <motion.div
      className="relative flex items-stretch min-h-[140px]"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{
        delay: entryDelay,
        duration: 0.5,
        ease: EASE_OUT,
        height: { delay: entryDelay, duration: 0.4, ease: EASE_OUT },
      }}
      style={{ overflow: "hidden" }}
    >
      {/* Left content */}
      <div className="flex-1 flex justify-end pr-6 md:pr-10 py-6">
        {side === "left" ? (
          <motion.div
            className="w-full max-w-sm"
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              delay: entryDelay + 0.15,
              duration: 0.55,
              ease: EASE_OUT,
            }}
          >
            <DetailCard
              entry={entry}
              side="left"
              categoryLabel={categoryLabel}
              accentRgb={accentRgb}
            />
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* Center — year.month on the strip */}
      <div className="relative w-16 md:w-20 shrink-0 flex items-center justify-center z-10">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{
            delay: entryDelay,
            duration: 0.45,
            ease: EASE_OUT,
          }}
        >
          <span
            className="text-lg md:text-xl font-bold"
            style={{ color: `rgba(${accentRgb}, 0.8)` }}
          >
            {year}
          </span>
          <span
            className="text-[10px]"
            style={{ color: `rgba(${accentRgb}, 0.4)` }}
          >
            .{month}
          </span>
          {entry.isActive && (
            <motion.div
              className="w-1.5 h-1.5 rounded-full mt-1"
              style={{
                backgroundColor: `rgba(${accentRgb}, 0.8)`,
                boxShadow: `0 0 8px rgba(${accentRgb}, 0.4)`,
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* Right content */}
      <div className="flex-1 flex justify-start pl-6 md:pl-10 py-6">
        {side === "right" ? (
          <motion.div
            className="w-full max-w-sm"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              delay: entryDelay + 0.15,
              duration: 0.55,
              ease: EASE_OUT,
            }}
          >
            <DetailCard
              entry={entry}
              side="right"
              categoryLabel={categoryLabel}
              accentRgb={accentRgb}
            />
          </motion.div>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  );
}

/* ─── Shared Cards ─── */

function CompactCard({
  entry,
  side,
  t,
}: {
  entry: ExpEntry;
  side: "left" | "right";
  t: ReturnType<typeof useI18n>["t"];
}) {
  const accentRgb = getAccent(entry.category);
  const categoryLabel =
    entry.category === "WORK" ? t.experience.work : t.experience.project;
  const align = side === "left" ? "text-right" : "text-left";
  const flexAlign = side === "left" ? "justify-end" : "justify-start";

  return (
    <div className="w-full max-w-xs">
      <div
        className="rounded-2xl border border-foreground/[0.06] p-5"
        style={{
          background: `linear-gradient(145deg, rgba(${accentRgb}, 0.04) 0%, transparent 50%)`,
        }}
      >
        <div className={`flex items-center gap-2 mb-2 ${flexAlign}`}>
          <span
            className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: `rgba(${accentRgb}, 0.1)`,
              color: `rgba(${accentRgb}, 0.8)`,
            }}
          >
            {categoryLabel}
          </span>
        </div>
        <h3
          className={`text-sm md:text-base font-semibold leading-snug ${align}`}
        >
          {entry.title}
        </h3>
        {entry.subTitle && (
          <p className={`text-xs text-foreground/45 mt-1 ${align}`}>
            {parse(entry.subTitle)}
          </p>
        )}
        {entry.skills.length > 0 && (
          <div className={`flex flex-wrap gap-1.5 mt-3 ${flexAlign}`}>
            {entry.skills.map((skill) => (
              <SkillItem
                key={skill.id}
                name={skill.item}
                iconUrl={skill.blobUrl}
                size="xs"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DetailCard({
  entry,
  side,
  categoryLabel,
  accentRgb,
}: {
  entry: ExpEntry;
  side: "left" | "right";
  categoryLabel: string;
  accentRgb: string;
}) {
  const align = side === "left" ? "text-right" : "text-left";
  const flexAlign = side === "left" ? "justify-end" : "justify-start";

  return (
    <div
      className="rounded-2xl border border-foreground/[0.06] p-5"
      style={{
        background: `linear-gradient(145deg, rgba(${accentRgb}, 0.04) 0%, transparent 50%)`,
      }}
    >
      <div className={`flex items-center gap-2 mb-2 ${flexAlign}`}>
        <span
          className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `rgba(${accentRgb}, 0.1)`,
            color: `rgba(${accentRgb}, 0.8)`,
          }}
        >
          {categoryLabel}
        </span>
        <span className="text-[11px] text-foreground/30">{entry.period}</span>
      </div>
      <h3
        className={`text-sm md:text-base font-semibold leading-snug ${align}`}
      >
        {entry.title}
      </h3>
      {entry.subTitle && (
        <p className={`text-xs text-foreground/45 mt-1 ${align}`}>
          {parse(entry.subTitle)}
        </p>
      )}
      {entry.skills.length > 0 && (
        <div className={`flex flex-wrap gap-1.5 mt-3 ${flexAlign}`}>
          {entry.skills.map((skill) => (
            <SkillItem
              key={skill.id}
              name={skill.item}
              iconUrl={skill.blobUrl}
              size="xs"
            />
          ))}
        </div>
      )}
      {entry.items.length > 0 && (
        <div
          className={`space-y-1.5 mt-4 pt-3 border-t border-foreground/[0.06] ${align}`}
        >
          {entry.items.map((item, idx) => (
            <p key={idx} className="text-xs text-foreground/50 leading-relaxed">
              {parse(item)}
            </p>
          ))}
        </div>
      )}
      {entry.links.length > 0 && (
        <div className={`flex flex-wrap gap-3 mt-3 ${flexAlign}`}>
          {entry.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function getAccent(category: string) {
  return category === "WORK"
    ? "var(--color-primary)"
    : "var(--color-secondary)";
}
