"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/theme/context";

type Skill = {
  id: number;
  category: string;
  item: string;
  blobUrl: string;
};

const CATEGORIES = [
  { key: "FRONTEND", label: "Frontend", accent: "0,122,255" },
  { key: "FRONTEND_LIBRARY", label: "Library", accent: "0,198,118" },
  { key: "ENV", label: "Environment", accent: "226,255,0" },
  { key: "DESIGN", label: "Design", accent: "168,85,247" },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function SkillItems({ skills }: { skills: Skill[] }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [mode, setMode] = useState<"all" | "grouped">("all");
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const handleToggle = () => {
    setMode((prev) => (prev === "all" ? "grouped" : "all"));
    setExpandedKey(null);
  };

  return (
    <LayoutGroup>
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="px-5 py-2 rounded-full text-sm font-medium transition-colors bg-primary/15 text-primary border border-primary/25 hover:bg-primary/25 hover:border-primary/40"
        >
          {mode === "all" ? "Group by Category" : "Show All"}
        </button>

        {/* Content Area — fixed height */}
        <div className="relative w-full flex justify-center" style={{ minHeight: 320 }}>
          <AnimatePresence mode="wait">
            {mode === "all" ? (
              <motion.div
                key="all-grid"
                className="flex flex-wrap gap-4 justify-center max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.id}
                    layoutId={`skill-${skill.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.4, ease: EASE }}
                  >
                    <SkillIcon skill={skill} size={40} showLabel={false} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="grouped-cards"
                className="flex items-stretch justify-center gap-0 w-full max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                {CATEGORIES.map((cat, catIdx) => {
                  const catSkills = skills.filter(
                    (s) => s.category === cat.key
                  );
                  const isExpanded = expandedKey === cat.key;
                  const hasExpanded = expandedKey !== null;

                  return (
                    <CategoryCard
                      key={cat.key}
                      category={cat}
                      skills={catSkills}
                      isExpanded={isExpanded}
                      isCollapsed={hasExpanded && !isExpanded}
                      isDark={isDark}
                      index={catIdx}
                      onHoverStart={() => setExpandedKey(cat.key)}
                      onHoverEnd={() => setExpandedKey(null)}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </LayoutGroup>
  );
}

/* ─── Category Card (stacked, expandable) ─── */
function CategoryCard({
  category,
  skills,
  isExpanded,
  isCollapsed,
  isDark,
  index,
  onHoverStart,
  onHoverEnd,
}: {
  category: (typeof CATEGORIES)[number];
  skills: Skill[];
  isExpanded: boolean;
  isCollapsed: boolean;
  isDark: boolean;
  index: number;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const { accent, label } = category;

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-pointer select-none"
      style={{
        marginLeft: index === 0 ? 0 : -20,
        zIndex: isExpanded ? 20 : index,
      }}
      animate={{
        width: isExpanded ? 380 : isCollapsed ? 70 : 180,
        opacity: isCollapsed ? 0.6 : 1,
      }}
      transition={{
        width: { type: "spring", stiffness: 400, damping: 35 },
        opacity: { duration: 0.3, ease: EASE },
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {/* Card background — opaque so overlapping cards don't bleed through */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundColor: isDark ? "rgb(15,24,42)" : "rgb(255,255,255)",
          borderRadius: 16,
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          background: isDark
            ? `linear-gradient(135deg, rgba(${accent}, 0.12) 0%, rgba(${accent}, 0.04) 100%)`
            : `linear-gradient(135deg, rgba(${accent}, 0.1) 0%, rgba(${accent}, 0.03) 100%)`,
          borderColor: isExpanded
            ? `rgba(${accent}, 0.25)`
            : `rgba(${accent}, 0.12)`,
        }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{
          border: "1px solid",
          borderRadius: 16,
        }}
      />

      <div className="relative p-5 h-[300px] flex flex-col">
        {/* Category Label — always visible, rotated when collapsed */}
        <motion.div
          className="flex items-center gap-2 mb-4 shrink-0"
          animate={{
            opacity: isExpanded || !isCollapsed ? 1 : 0.7,
          }}
        >
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: `rgba(${accent}, 0.7)` }}
          />
          <motion.span
            className="text-xs font-semibold tracking-wider uppercase whitespace-nowrap overflow-hidden"
            style={{ color: `rgba(${accent}, ${isDark ? 0.8 : 0.7})` }}
            animate={{
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? 0 : "auto",
            }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {label}
          </motion.span>
          <motion.span
            className="text-[10px] font-medium whitespace-nowrap"
            style={{ color: `rgba(${accent}, 0.4)` }}
            animate={{
              opacity: isCollapsed ? 0 : 0.6,
              width: isCollapsed ? 0 : "auto",
            }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {skills.length}
          </motion.span>
        </motion.div>

        {/* Skills inside the card */}
        <div className="flex-1 overflow-hidden">
          <motion.div
            className="flex flex-wrap gap-4 content-start"
            animate={{
              opacity: isCollapsed ? 0 : 1,
            }}
            transition={{ duration: 0.3, delay: isExpanded ? 0.1 : 0 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                layoutId={`skill-${skill.id}`}
                initial={false}
                animate={{
                  opacity: isExpanded ? 1 : isCollapsed ? 0 : 0.8,
                  scale: isExpanded ? 1 : 0.85,
                }}
                transition={{
                  delay: isExpanded ? i * 0.03 : 0,
                  duration: 0.35,
                  ease: EASE,
                }}
              >
                <SkillIcon
                  skill={skill}
                  size={isExpanded ? 38 : 30}
                  showLabel={isExpanded}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Skill Icon ─── */
function SkillIcon({
  skill,
  size,
  showLabel,
}: {
  skill: Skill;
  size: number;
  showLabel: boolean;
}) {
  return (
    <div className="relative group flex flex-col items-center gap-1">
      <Image src={skill.blobUrl} alt={skill.item} width={size} height={size} />
      {showLabel && (
        <span className="text-[9px] text-foreground/40 font-medium whitespace-nowrap">
          {skill.item}
        </span>
      )}
      {!showLabel && (
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-foreground/80 text-background rounded px-1.5 py-0.5 text-[10px] whitespace-nowrap invisible group-hover:visible z-30">
          {skill.item}
        </span>
      )}
    </div>
  );
}
