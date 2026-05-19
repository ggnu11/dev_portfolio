"use client";

import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import Image from "next/image";
import parse from "html-react-parser";
import SkillItem from "../skill/SkillItem";
import ProjectCinematic from "./ProjectCinematic";
import type { FullProject } from "./types";

const ANGLE_SPACING = 36;
const RADIUS = 300;
const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const WHEEL_THRESHOLD = 50;

export default function ProjectGrid({
  projects,
}: {
  projects: FullProject[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectOrigin, setSelectOrigin] = useState<"left" | "right">("left");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;
  const total = projects.length;

  // Motion value driven by wheel events (0 ~ 1)
  const progress = useMotionValue(0);
  const wheelAccum = useRef(0);
  const isWheelLocked = useRef(false);

  const handleClose = useCallback(() => setSelectedId(null), []);

  useEffect(() => {
    document.body.style.overflow = selectedId !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  // Native wheel handler (non-passive) so preventDefault works
  const focusedIndexRef = useRef(focusedIndex);
  focusedIndexRef.current = focusedIndex;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (isWheelLocked.current) {
        e.preventDefault();
        return;
      }

      const idx = focusedIndexRef.current;
      wheelAccum.current += e.deltaY;

      if (Math.abs(wheelAccum.current) >= WHEEL_THRESHOLD) {
        const direction = wheelAccum.current > 0 ? 1 : -1;
        wheelAccum.current = 0;

        // Wrap around: last → first, first → last
        const nextIndex = (idx + direction + total) % total;

        e.preventDefault();
        isWheelLocked.current = true;

        setFocusedIndex(nextIndex);
        progress.set(nextIndex / (total - 1));

        setTimeout(() => {
          isWheelLocked.current = false;
        }, 400);
      } else {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [total, progress]);

  // Also support clicking progress dots
  const handleDotClick = useCallback(
    (index: number) => {
      setFocusedIndex(index);
      progress.set(index / (total - 1));
    },
    [total, progress]
  );

  const focusedProject = projects[focusedIndex];

  return (
    <LayoutGroup>
      <div
        ref={containerRef}
        className="relative w-full h-[80vh] md:h-[50vh] rounded-3xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover-activated background */}
        <motion.div
          className="absolute -inset-10 pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{
            background: "radial-gradient(ellipse at center, rgba(var(--foreground-rgb), 0.2) 0%, rgba(var(--foreground-rgb), 0.08) 40%, transparent 70%)",
          }}
        />

        <div className="relative h-full w-full overflow-hidden rounded-3xl">
          <div className="relative h-full flex items-center">
            {/* ═══ LEFT: Clock Wheel ═══ */}
            <div className="relative w-full md:w-[42%] h-full flex items-center">
              {/* Subtle arc guide */}
              <div
                className="absolute rounded-full border border-foreground/[0.03] pointer-events-none hidden md:block"
                style={{
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                  left: -RADIUS,
                  top: `calc(50% - ${RADIUS}px)`,
                }}
              />

              {projects.map((project, i) => (
                <WheelCard
                  key={project.id}
                  project={project}
                  index={i}
                  total={total}
                  progress={progress}
                  onSelect={() => {
                    setSelectOrigin("left");
                    setSelectedId(project.id);
                  }}
                />
              ))}
            </div>

            {/* ═══ RIGHT: Focused Detail ═══ */}
            <div className="hidden md:flex flex-1 items-center justify-center px-8 lg:px-14">
              <AnimatePresence mode="wait">
                <FocusedDetail
                  key={focusedProject.id}
                  project={focusedProject}
                  index={focusedIndex}
                  onSelect={() => {
                    setSelectOrigin("right");
                    setSelectedId(focusedProject.id);
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="w-[1px] h-6 bg-gradient-to-b from-foreground/20 to-transparent"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>

          {/* Progress dots — right edge */}
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col-reverse items-center gap-2.5">
            {projects.map((p, i) => (
              <ProgressDot
                key={p.id}
                index={i}
                total={total}
                focusedIndex={focusedIndex}
                accent={["0,122,255", "0,198,118", "226,255,0"][p.id % 3]}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cinematic Fullscreen */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectCinematic
            project={selectedProject}
            origin={selectOrigin}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

/* ═══════════════════════════════════════════
   Wheel Card — positioned on the arc
   ═══════════════════════════════════════════ */
function WheelCard({
  project,
  index,
  total,
  progress,
  onSelect,
}: {
  project: FullProject;
  index: number;
  total: number;
  progress: ReturnType<typeof useMotionValue<number>>;
  onSelect: () => void;
}) {
  const { id, title, period } = project;
  const shapeVariant = id % 9;
  const colorIdx = id % 3;
  const accentColors = ["0,122,255", "0,198,118", "226,255,0"];
  const accent = accentColors[colorIdx];

  // Angle from 3 o'clock (0°)
  const angle = useTransform(progress, (v: number) => {
    const activeFloat = v * (total - 1);
    return (index - activeFloat) * ANGLE_SPACING;
  });

  // Position on arc (center at left edge, y centered)
  const x = useTransform(angle, (a: number) => {
    const rad = (a * Math.PI) / 180;
    return RADIUS * Math.cos(rad);
  });
  const y = useTransform(angle, (a: number) => {
    const rad = (a * Math.PI) / 180;
    return -RADIUS * Math.sin(rad);
  });

  // Visual depth based on distance from focus
  const absAngle = useTransform(angle, (a: number) => Math.abs(a));
  const blur = useTransform(absAngle, [0, 20, 60, 120], [0, 2, 8, 12]);
  const cardOpacity = useTransform(absAngle, [0, 15, 70, 120], [1, 0.8, 0.25, 0.05]);
  const cardScale = useTransform(absAngle, [0, 20, 80], [1, 0.88, 0.7]);

  // Spring everything
  const cfg = { stiffness: 120, damping: 20, mass: 0.8 };
  const sx = useSpring(x, cfg);
  const sy = useSpring(y, cfg);
  const sBlur = useSpring(blur, cfg);
  const sOpacity = useSpring(cardOpacity, cfg);
  const sScale = useSpring(cardScale, cfg);
  const filterStr = useTransform(sBlur, (b) => `blur(${b}px)`);

  return (
    <motion.div
      className="absolute"
      style={{
        left: 0,
        top: "50%",
        x: sx,
        y: sy,
        opacity: sOpacity,
        scale: sScale,
        filter: filterStr,
        willChange: "transform, opacity, filter",
        zIndex: useTransform(absAngle, (a) => Math.round(40 - a)),
      }}
    >
      {/* Inner wrapper to center the card on its arc point */}
      <div style={{ transform: "translate(-50%, -50%)" }}>
        <motion.div
          layoutId={`project-card-${id}`}
          onClick={onSelect}
          className="w-[180px] md:w-[220px] p-5 rounded-2xl border border-foreground/[0.08] bg-background/80 backdrop-blur-md cursor-pointer select-none group"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3 }}
        >
          {/* Accent glow on focused card */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: useTransform(
                absAngle,
                [0, 15],
                [
                  `0 8px 40px -8px rgba(${accent}, 0.15), inset 0 0 0 1px rgba(${accent}, 0.1)`,
                  "0 0 0 0 transparent",
                ]
              ),
            }}
          />

          <motion.div layoutId={`project-shape-${id}`} className="w-7 h-7 mb-3">
            <Image
              src={`/assets/shape-variant-${shapeVariant}.svg`}
              alt=""
              width={28}
              height={28}
            />
          </motion.div>

          <motion.h4
            layoutId={`project-title-${id}`}
            className="text-sm md:text-base font-semibold leading-snug mb-1.5"
          >
            {parse(title)}
          </motion.h4>

          <p className="text-[11px] text-foreground/30 mb-3">{period}</p>

          {/* Accent bar */}
          <div
            className="h-[2px] w-6 rounded-full"
            style={{ backgroundColor: `rgba(${accent}, 0.35)` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Focused Detail — right panel
   ═══════════════════════════════════════════ */
function FocusedDetail({
  project,
  index,
  onSelect,
}: {
  project: FullProject;
  index: number;
  onSelect: () => void;
}) {
  const { id, title, sub_title, period, member, skillData, links } = project;
  const colorIdx = id % 3;
  const accent = ["0,122,255", "0,198,118", "226,255,0"][colorIdx];
  const shapeVariant = id % 9;

  return (
    <motion.div
      onClick={onSelect}
      className="relative max-w-md w-full rounded-2xl border border-foreground/[0.08] bg-background/60 backdrop-blur-md p-8 lg:p-10 cursor-pointer"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5, ease: EASE }}
      whileHover={{
        scale: 1.02,
        borderColor: `rgba(${accent}, 0.2)`,
        boxShadow: `0 8px 32px -8px rgba(${accent}, 0.12)`,
      }}
    >
      {/* Decorative large shape watermark */}
      <motion.div
        className="absolute -right-8 -top-16 w-40 h-40 opacity-[0.04] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.04, scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Image
          src={`/assets/shape-variant-${shapeVariant}.svg`}
          alt=""
          width={160}
          height={160}
        />
      </motion.div>

      {/* Project number */}
      <motion.span
        className="inline-block text-[11px] tracking-[0.25em] uppercase mb-5 font-medium"
        style={{ color: `rgba(${accent}, 0.5)` }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.4, ease: EASE }}
      >
        Project {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
      >
        {parse(title)}
      </motion.h2>

      {/* Period & Member */}
      <motion.div
        className="flex items-center gap-3 text-sm text-foreground/30 mb-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
      >
        <span>{period}</span>
        <span className="w-1 h-1 rounded-full bg-foreground/15" />
        <span>{member}</span>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-sm md:text-base text-foreground/45 leading-relaxed mb-7"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
      >
        {sub_title}
      </motion.p>

      {/* Skills */}
      {skillData.length > 0 && (
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4, ease: EASE }}
        >
          {skillData.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
            >
              <SkillItem name={skill.item} iconUrl={skill.blobUrl} size="sm" />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Links */}
      {links.length > 0 && (
        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4, ease: EASE }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-full border border-foreground/10 text-foreground/40 hover:text-foreground/70 hover:border-foreground/20 no-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}

      {/* Accent divider */}
      <motion.div
        className="h-[1px] w-12"
        style={{ backgroundColor: `rgba(${accent}, 0.15)`, transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Progress Dot
   ═══════════════════════════════════════════ */
function ProgressDot({
  index,
  focusedIndex,
  accent,
  onClick,
}: {
  index: number;
  total: number;
  focusedIndex: number;
  accent: string;
  onClick: () => void;
}) {
  const isActive = index === focusedIndex;

  return (
    <motion.div
      className="w-2 h-2 rounded-full ring-1 ring-foreground/10 cursor-pointer"
      animate={{
        scale: isActive ? 1 : 0.5,
        opacity: isActive ? 1 : 0.35,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        backgroundColor: `rgba(${accent}, 1)`,
        boxShadow: isActive ? `0 0 6px rgba(${accent}, 0.4)` : "none",
      }}
      onClick={onClick}
    />
  );
}
