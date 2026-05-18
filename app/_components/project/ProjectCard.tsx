"use client";

import { forwardRef } from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import SkillItem from "../skill/SkillItem";
import type { FullProject } from "./types";

type Props = {
  project: FullProject;
  isHovered: boolean;
  isDimmed: boolean;
  isHidden: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onSelect: () => void;
};

const ProjectCard = forwardRef<HTMLDivElement, Props>(
  (
    { project, isHovered, isDimmed, isHidden, onHoverStart, onHoverEnd, onSelect },
    ref
  ) => {
    const { id, title, sub_title, skillData } = project;
    const shapeVariant = id % 9;
    const colorIdx = id % 3;

    const accentColors = ["0,122,255", "0,198,118", "226,255,0"];
    const accent = accentColors[colorIdx];

    return (
      <motion.div
        ref={ref}
        layoutId={`project-card-${id}`}
        onClick={onSelect}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        className="relative cursor-pointer select-none"
        animate={{
          opacity: isHidden ? 0 : isDimmed ? 0.4 : 1,
          scale: isHidden ? 0.96 : isDimmed ? 0.98 : 1,
          filter: isDimmed ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ willChange: "transform, opacity, filter" }}
      >
        <motion.div
          className="relative w-full p-6 md:p-7 rounded-2xl border border-foreground/10 overflow-hidden"
          animate={{
            borderColor: isHovered
              ? `rgba(${accent}, 0.3)`
              : "rgba(var(--foreground-rgb), 0.1)",
            boxShadow: isHovered
              ? `0 20px 60px -15px rgba(${accent}, 0.15), 0 0 0 1px rgba(${accent}, 0.1)`
              : "0 0 0 0 transparent",
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ y: -6 }}
        >
          {/* Subtle gradient glow on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: isHovered ? 0.06 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              background: `radial-gradient(ellipse at 50% 0%, rgba(${accent}, 1) 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex flex-col h-full justify-between min-h-[180px] md:min-h-[220px]">
            <div>
              {/* Shape icon with layoutId for shared element */}
              <motion.div
                layoutId={`project-shape-${id}`}
                className="w-9 h-9 mb-5 relative"
              >
                <Image
                  src={`/assets/shape-variant-${shapeVariant}.svg`}
                  alt=""
                  width={36}
                  height={36}
                />
              </motion.div>

              {/* Title with layoutId */}
              <motion.h3
                layoutId={`project-title-${id}`}
                className="text-lg md:text-xl font-semibold mb-2"
              >
                {parse(title)}
              </motion.h3>

              {/* Subtitle - stagger reveal on hover */}
              <motion.p
                className="text-sm text-foreground/40 leading-relaxed line-clamp-2"
                animate={{
                  opacity: isHovered ? 0.7 : 0.4,
                  y: isHovered ? 0 : 2,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {sub_title}
              </motion.p>
            </div>

            {/* Skills */}
            {skillData.length > 0 && (
              <motion.div
                className="flex flex-wrap gap-2.5 mt-5 pt-4 border-t border-foreground/[0.06]"
                animate={{
                  opacity: isHovered ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
              >
                {skillData.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    name={skill.item}
                    iconUrl={skill.blobUrl}
                    size="xs"
                  />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
