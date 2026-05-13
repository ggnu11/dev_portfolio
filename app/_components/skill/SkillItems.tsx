"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import SkillItem from "./SkillItem";

type Skill = {
  id: number;
  category: string;
  item: string;
  blobUrl: string;
};

const CATEGORIES = [
  { key: "FRONTEND", label: "Frontend" },
  { key: "FRONTEND_LIBRARY", label: "Library" },
  { key: "ENV", label: "Environment & Deploy" },
  { key: "DESIGN", label: "Design" },
];

export default function SkillItems({ skills }: { skills: Skill[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const indicatorX = useMotionValue(0);
  const indicatorWidth = useMotionValue(0);

  useEffect(() => {
    if (activeCategory === null) return;
    const idx = CATEGORIES.findIndex((c) => c.key === activeCategory);
    const el = tabRefs.current[idx];
    if (el) {
      indicatorX.set(el.offsetLeft);
      indicatorWidth.set(el.offsetWidth);
    }
  }, [activeCategory, indicatorX, indicatorWidth]);

  const handleTabClick = (key: string) => {
    setActiveCategory((prev) => (prev === key ? null : key));
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative bg-gray-100 dark:bg-foreground/10 p-1.5 rounded-full flex">
        {activeCategory && (
          <motion.div
            className="absolute bg-background rounded-full h-[calc(100%-12px)] top-1.5"
            style={{ x: indicatorX, width: indicatorWidth }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 700,
              damping: 30,
            }}
          />
        )}
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.key}
            ref={(el) => { tabRefs.current[i] = el; }}
            onClick={() => handleTabClick(cat.key)}
            className={`relative z-10 px-3 py-1.5 text-sm sm:text-base font-semibold rounded-full transition-colors ${
              activeCategory === cat.key
                ? "text-foreground"
                : "text-gray-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 max-w-96 justify-center">
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            name={skill.item}
            iconUrl={skill.blobUrl}
            size="md"
            isActive={
              activeCategory === null || skill.category === activeCategory
            }
          />
        ))}
      </div>
    </div>
  );
}
