"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import parse from "html-react-parser";
import type { FullProject } from "./types";
import { resolveText, type I18nText } from "@/data";
import { useI18n } from "@/i18n/context";
import type { Locale } from "@/i18n/dictionaries";
import SkillKeywords from "../SkillKeywords";

function r(text: I18nText | string | null | undefined, locale: Locale): string {
  if (!text) return "";
  return resolveText(text, locale);
}

/* ─── Section Header (left-aligned, reference style) ─── */
function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="!text-left text-sm md:text-base font-bold tracking-[0.2em] uppercase text-primary mb-3">
        {title}
      </h2>
      <div className="h-[2px] bg-foreground/20" />
    </div>
  );
}

/* ─── Single Project Entry ─── */
function ProjectEntry({
  project,
  locale,
  index,
}: {
  project: FullProject;
  locale: Locale;
  index: number;
}) {
  const hasLinks = project.links.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-10 py-10 md:py-12 border-b border-foreground/10 first:pt-0 last:border-b-0"
    >
      {/* Left: Period */}
      <div className="mb-1 md:mb-0 md:pt-0.5">
        <span className="text-[15px] font-bold text-foreground/80 whitespace-nowrap">
          {r(project.period, locale)}
        </span>
      </div>

      {/* Right: Content */}
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h4 className="text-xl font-bold leading-snug">
          {parse(project.title)}
        </h4>

        {/* Sub-title (company/role) */}
        <p className="text-[15px] italic text-foreground/45 -mt-1">
          {r(project.sub_title, locale)}
        </p>

        {/* Detail sections */}
        {project.items.map((section) => (
          <ul
            key={section.id}
            className="list-none indent-0 pl-0 space-y-2.5"
          >
            {section.content.map((item, i) => {
              const text = r(item, locale);
              return (
                <li
                  key={i}
                  className="text-[15px] leading-relaxed text-foreground/80 pl-5 -indent-5"
                >
                  <span className="text-foreground/40 mr-2.5">•</span>
                  {text}
                </li>
              );
            })}
          </ul>
        ))}

        {/* Skill Keywords */}
        {project.skillData.length > 0 && (
          <SkillKeywords skills={project.skillData} />
        )}

        {/* Links */}
        {hasLinks && (
          <div className="flex flex-wrap gap-3 mt-1">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 no-underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

const INITIAL_COMPANY_COUNT = 5;

/* ─── Category Divider ─── */
function CategoryDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 pt-14 pb-6">
      <div className="h-[1px] flex-1 bg-foreground/15" />
      <span className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/50">
        {label}
      </span>
      <div className="h-[1px] flex-1 bg-foreground/15" />
    </div>
  );
}

/* ─── Project Grid (Timeline style) ─── */
export default function ProjectGrid({
  projects,
}: {
  projects: FullProject[];
}) {
  const { locale, t } = useI18n();
  const [showAll, setShowAll] = useState(false);

  const companyProjects = projects.filter((p) => p.category === "COMPANY");
  const personalProjects = projects.filter((p) => p.category === "PERSONAL");

  const visibleCompany = showAll
    ? companyProjects
    : companyProjects.slice(0, INITIAL_COMPANY_COUNT);
  const hiddenCount = companyProjects.length - INITIAL_COMPANY_COUNT;

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6">
      <SectionTitle title="PROJECT" />

      {/* Company Projects */}
      <CategoryDivider label={t.project.company} />
      <AnimatePresence initial={false}>
        {visibleCompany.map((project, i) => (
          <ProjectEntry
            key={project.id}
            project={project}
            locale={locale}
            index={i}
          />
        ))}
      </AnimatePresence>
      {hiddenCount > 0 && (
        <div className="flex justify-center pt-8 pb-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full border border-foreground/20 text-sm font-medium text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-200"
          >
            {showAll
              ? t.project.showLess
              : `${t.project.showMore} (+${hiddenCount})`}
          </button>
        </div>
      )}

      {/* Personal Projects */}
      {personalProjects.length > 0 && (
        <>
          <CategoryDivider label={t.project.personal} />
          {personalProjects.map((project, i) => (
            <ProjectEntry
              key={project.id}
              project={project}
              locale={locale}
              index={i}
            />
          ))}
        </>
      )}
    </div>
  );
}
