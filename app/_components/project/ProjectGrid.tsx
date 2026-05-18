"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectCinematic from "./ProjectCinematic";
import { useI18n } from "@/i18n/context";
import type { FullProject } from "./types";

export default function ProjectGrid({
  projects,
}: {
  projects: FullProject[];
}) {
  const { t } = useI18n();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showCount, setShowCount] = useState(6);
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);

  const visible = projects.slice(0, showCount);
  const selectedProject = projects.find((p) => p.id === selectedId) ?? null;

  const handleSelect = useCallback((id: number) => {
    const el = cardRefs.current.get(id);
    if (el) {
      setCardRect(el.getBoundingClientRect());
    }
    setSelectedId(id);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedId(null);
    setCardRect(null);
  }, []);

  // Lock body scroll when cinematic is open
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedId]);

  return (
    <LayoutGroup>
      {/* Card Grid */}
      <motion.div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 w-full"
        layout
      >
        {visible.map((p) => (
          <ProjectCard
            key={p.id}
            ref={(el) => {
              if (el) cardRefs.current.set(p.id, el);
            }}
            project={p}
            isHovered={hoveredId === p.id}
            isDimmed={hoveredId !== null && hoveredId !== p.id}
            isHidden={selectedId !== null}
            onHoverStart={() => setHoveredId(p.id)}
            onHoverEnd={() => setHoveredId(null)}
            onSelect={() => handleSelect(p.id)}
          />
        ))}
      </motion.div>

      {/* Show more */}
      {showCount < projects.length && selectedId === null && (
        <motion.button
          onClick={() => setShowCount((c) => c + 6)}
          className="mt-8 px-7 py-2 min-w-40 bg-foreground/5 rounded-lg hover:bg-foreground/10 text-foreground/65 font-semibold text-base md:text-sm transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t.project.showMore}
        </motion.button>
      )}

      {/* Cinematic Fullscreen */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectCinematic
            project={selectedProject}
            cardRect={cardRect}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
