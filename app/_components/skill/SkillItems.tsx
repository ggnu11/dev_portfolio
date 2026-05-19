"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Skill = {
  id: number;
  category: string;
  item: string;
  blobUrl: string;
};

const CATEGORIES = [
  { key: "ALL", label: "All" },
  { key: "FRONTEND", label: "Frontend", accent: "0,122,255" },
  { key: "FRONTEND_LIBRARY", label: "Library", accent: "0,198,118" },
  { key: "ENV", label: "Environment", accent: "226,255,0" },
  { key: "DESIGN", label: "Design", accent: "168,85,247" },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function SkillItems({ skills }: { skills: Skill[] }) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Category filter buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all border"
              style={{
                backgroundColor: isActive
                  ? cat.accent
                    ? `rgba(${cat.accent}, 0.15)`
                    : "rgba(var(--foreground-rgb), 0.1)"
                  : "transparent",
                borderColor: isActive
                  ? cat.accent
                    ? `rgba(${cat.accent}, 0.3)`
                    : "rgba(var(--foreground-rgb), 0.2)"
                  : "rgba(var(--foreground-rgb), 0.08)",
                color: isActive
                  ? cat.accent
                    ? `rgba(${cat.accent}, 0.9)`
                    : "rgba(var(--foreground-rgb), 0.9)"
                  : "rgba(var(--foreground-rgb), 0.4)",
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills grid — all always visible */}
      <div className="flex flex-wrap gap-5 justify-center max-w-lg">
        {skills.map((skill, i) => {
          const isHighlighted =
            activeCategory === "ALL" || skill.category === activeCategory;

          return (
            <motion.div
              key={skill.id}
              className="relative group flex flex-col items-center gap-1"
              animate={{
                opacity: isHighlighted ? 1 : 0.15,
                scale: isHighlighted ? 1 : 0.85,
                filter: isHighlighted ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <Image
                src={skill.blobUrl}
                alt={skill.item}
                width={40}
                height={40}
              />
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-foreground/80 text-background rounded px-1.5 py-0.5 text-[10px] whitespace-nowrap invisible group-hover:visible z-30">
                {skill.item}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
