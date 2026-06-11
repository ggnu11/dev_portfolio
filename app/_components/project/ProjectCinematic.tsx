"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ExternalLink } from "react-feather";
import type { FullProject } from "./types";
import { resolveText } from "@/data";
import { useI18n } from "@/i18n/context";

const EASE_CINEMATIC = [0.25, 0.46, 0.45, 0.94] as const;

const imageRatioMap = {
  SQUARE: { w: 312, h: 312 },
  PORTRAIT: { w: 468, h: 903 },
  LANDSCAPE: { w: 384, h: 208 },
};

export default function ProjectCinematic({
  project,
  layoutPrefix = "project",
  onClose,
}: {
  project: FullProject;
  layoutPrefix?: "wheel" | "detail" | "project";
  cardRect?: DOMRect | null;
  onClose: () => void;
}) {
  const { locale } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);
  const shapeVariant = project.id % 9;
  const colorIdx = project.id % 3;
  const accentColors = ["0,122,255", "0,198,118", "226,255,0"];
  const accent = accentColors[colorIdx];

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0.3]);
  const headerScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.96]);
  const headerY = useTransform(scrollYProgress, [0, 0.08], [0, -20]);
  const springHeaderOpacity = useSpring(headerOpacity, { stiffness: 300, damping: 30 });
  const springHeaderScale = useSpring(headerScale, { stiffness: 300, damping: 30 });
  const springHeaderY = useSpring(headerY, { stiffness: 300, damping: 30 });

  // Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);


  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col cursor-back"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
      onClick={onClose}
    >
      {/* Dark cinematic backdrop */}
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
      />

      {/* Scroll progress indicator — right edge */}
      <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[1004] flex flex-col items-center gap-1">
        <motion.div
          className="w-[2px] rounded-full"
          style={{
            height: 60,
            backgroundColor: `rgba(${accent}, 0.1)`,
          }}
        >
          <motion.div
            className="w-full rounded-full"
            style={{
              height: useTransform(scrollYProgress, [0, 1], [0, 60]),
              backgroundColor: `rgba(${accent}, 0.5)`,
            }}
          />
        </motion.div>
      </div>

      {/* Scrollable content */}
      <motion.div
        ref={scrollRef}
        className="relative z-[1001] h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* ═══ HERO SECTION ═══ */}
        <motion.div
          className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12"
          style={{
            opacity: springHeaderOpacity,
            scale: springHeaderScale,
            y: springHeaderY,
          }}
        >
          {/* Accent glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 30%, rgba(${accent}, 0.08) 0%, transparent 100%)`,
            }}
          />

          <div className="flex flex-col items-center">

          {/* Shape icon */}
          <motion.div
            layoutId={`${layoutPrefix}-shape-${project.id}`}
            className="mb-8"
            transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
          >
            <Image
              src={`/assets/shape-variant-${shapeVariant}.svg`}
              alt=""
              width={48}
              height={48}
            />
          </motion.div>

          {/* Title - shared element */}
          <motion.h1
            layoutId={`${layoutPrefix}-title-${project.id}`}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center leading-tight mb-6 max-w-3xl"
            transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
          >
            {parse(project.title)}
          </motion.h1>

          {/* Subtitle - stagger reveal */}
          <motion.p
            className="text-base md:text-lg text-foreground/40 text-center max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE_CINEMATIC }}
          >
            {resolveText(project.sub_title, locale)}
          </motion.p>

          {/* Meta row */}
          <motion.div
            className="flex items-center gap-6 mt-8 text-sm text-foreground/30"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE_CINEMATIC }}
          >
            <span>{resolveText(project.period, locale)}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span>{project.member}</span>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: EASE_CINEMATIC }}
          >
            {project.skillData.map((skill) => (
              <span
                key={skill.id}
                className="text-sm font-semibold px-3 py-1 rounded-full bg-[#00C676] text-white border border-[#00C676]"
              >
                {skill.item}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          {project.links.length > 0 && (
            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: EASE_CINEMATIC }}
            >
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/10 text-foreground/60 text-sm hover:text-foreground hover:border-foreground/30 no-underline transition-colors cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.label}
                  <ExternalLink size={14} />
                </a>
              ))}
            </motion.div>
          )}

          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="text-[10px] text-foreground/20 tracking-[0.3em] uppercase">
              Scroll
            </span>
            <motion.div
              className="w-[1px] h-8 bg-gradient-to-b from-foreground/30 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        </motion.div>

        {/* ═══ DETAIL SECTIONS - Sticky Scroll Storytelling ═══ */}
        <div className="relative">
          {/* Gradient transition from hero to content */}
          <div className="h-32 bg-gradient-to-b from-transparent to-background" />

          <div className="bg-background px-4 sm:px-6 md:px-12 pb-16 sm:pb-24 md:pb-32">
            <div className="max-w-3xl mx-auto">
              {project.items.map((item, idx) => (
                <ProjectDetailSection
                  key={item.id}
                  item={item}
                  index={idx}
                  accent={accent}
                  locale={locale}
                  scrollRef={scrollRef}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Individual Detail Section with scroll-triggered reveal ─── */
function ProjectDetailSection({
  item,
  index,
  accent,
  locale,
  scrollRef,
}: {
  item: FullProject["items"][number];
  index: number;
  accent: string;
  locale: import("@/i18n/dictionaries").Locale;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
    target: sectionRef,
    offset: ["start 0.85", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const springOpacity = useSpring(opacity, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });

  // Clip-path reveal for images
  const clipProgress = useTransform(scrollYProgress, [0.2, 1], [100, 0]);
  const springClip = useSpring(clipProgress, { stiffness: 200, damping: 30 });
  const clipPath = useTransform(springClip, (v) => `inset(0 ${v}% 0 0 round 12px)`);

  return (
    <motion.div
      ref={sectionRef}
      className="py-10 sm:py-16 md:py-24"
      style={{
        opacity: springOpacity,
        y: springY,
        willChange: "transform, opacity",
      }}
    >
      {/* Section number + title */}
      <div className="flex items-baseline gap-4 mb-8">
        <span
          className="text-3xl sm:text-5xl md:text-7xl font-bold"
          style={{ color: `rgba(${accent}, 0.15)` }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {resolveText(item.title, locale)}
        </h3>
      </div>

      {/* Content items - stagger */}
      <div className="space-y-4 mb-8">
        {item.content.map((c, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: `rgba(${accent}, 0.5)` }}
            />
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
              {parse(resolveText(c, locale))}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Image with clip-path reveal */}
      {item.blobUrl && (
        <motion.div
          className="relative rounded-xl overflow-hidden mt-6"
          style={{ clipPath }}
        >
          <Image
            src={item.blobUrl}
            alt={resolveText(item.title, locale)}
            width={
              item.image_ratio
                ? imageRatioMap[item.image_ratio].w
                : 384
            }
            height={
              item.image_ratio
                ? imageRatioMap[item.image_ratio].h
                : 208
            }
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
      )}

      {/* Divider line */}
      <motion.div
        className="mt-10 sm:mt-16 md:mt-24 h-[1px] w-full"
        style={{
          background: `linear-gradient(to right, transparent, rgba(${accent}, 0.15), transparent)`,
        }}
      />
    </motion.div>
  );
}
