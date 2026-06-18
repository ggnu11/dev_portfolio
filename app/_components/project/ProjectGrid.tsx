"use client";

import { useState, useRef, useCallback, useEffect } from "react";
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

/* ─── Section Header ─── */
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

/* ─── Category Switch ─── */
function CategorySwitch({
  active,
  onSelect,
  labels,
}: {
  active: "COMPANY" | "PERSONAL";
  onSelect: (cat: "COMPANY" | "PERSONAL") => void;
  labels: { company: string; personal: string };
}) {
  const isCompany = active === "COMPANY";

  return (
    <div className="flex justify-center mb-10">
      <div className="relative flex items-center bg-foreground/5 rounded-full p-1">
        <motion.div
          className="absolute top-1 bottom-1 rounded-full bg-primary"
          initial={false}
          animate={{ x: isCompany ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          style={{ width: "calc(50% - 2px)" }}
        />
        {(["COMPANY", "PERSONAL"] as const).map((cat) => {
          const isActive = active === cat;
          const label = cat === "COMPANY" ? labels.company : labels.personal;
          return (
            <button
              key={cat}
              onClick={() => onSelect(cat)}
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                isActive ? "text-white" : "text-foreground/45 hover:text-foreground/65"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Group Divider ─── */
function GroupDivider({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="pt-10 pb-6 md:pt-14 md:pb-8">
      <div className="flex items-center gap-4 mb-2">
        <div className="h-px flex-1 bg-foreground/10" />
        <h3 className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-primary whitespace-nowrap">
          {title}
        </h3>
        <div className="h-px flex-1 bg-foreground/10" />
      </div>
      {description && (
        <p className="text-center text-[13px] text-foreground/40 mt-2">
          {description}
        </p>
      )}
    </div>
  );
}

/* ─── Full Project Entry (Featured) ─── */
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
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-10 py-10 md:py-12 border-b border-foreground/10 first:pt-0 last:border-b-0"
    >
      <div className="mb-1 md:mb-0 md:pt-0.5">
        <span className="text-[15px] font-bold text-foreground/80 whitespace-nowrap">
          {r(project.period, locale)}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-xl font-bold leading-snug">
          {parse(project.title)}
        </h4>

        <p className="text-[15px] italic text-foreground/45 -mt-1">
          {r(project.sub_title, locale)}
        </p>

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

        {project.skillData.length > 0 && (
          <SkillKeywords skills={project.skillData} />
        )}

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

/* ─── Compact Project Entry (Core) ─── */
function CoreProjectEntry({
  project,
  locale,
  index,
}: {
  project: FullProject;
  locale: Locale;
  index: number;
}) {
  const hasLinks = project.links.length > 0;
  const topItems = project.items.flatMap((s) => s.content).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-10 py-6 md:py-8 border-b border-foreground/10 last:border-b-0"
    >
      <div className="mb-1 md:mb-0 md:pt-0.5">
        <span className="text-[13px] font-bold text-foreground/60 whitespace-nowrap">
          {r(project.period, locale)}
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="text-base font-bold leading-snug">
            {parse(project.title)}
          </h4>
          <span className="text-[13px] text-foreground/40">
            {r(project.sub_title, locale)}
          </span>
        </div>

        <ul className="list-none indent-0 pl-0 space-y-1.5">
          {topItems.map((item, i) => {
            const text = r(item, locale);
            return (
              <li
                key={i}
                className="text-[14px] leading-relaxed text-foreground/65 pl-4 -indent-4"
              >
                <span className="text-foreground/30 mr-2">•</span>
                {text}
              </li>
            );
          })}
        </ul>

        {project.skillData.length > 0 && (
          <SkillKeywords skills={project.skillData} />
        )}

        {hasLinks && (
          <div className="flex flex-wrap gap-3">
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

const PAGE_SIZE = 3;
const CONTAINER_HEIGHT = "max-h-[75vh]";

/* ─── Project Grid ─── */
export default function ProjectGrid({
  projects,
}: {
  projects: FullProject[];
}) {
  const { locale, t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<"COMPANY" | "PERSONAL">("COMPANY");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const companyProjects = projects.filter((p) => p.category === "COMPANY");
  const personalProjects = projects.filter((p) => p.category === "PERSONAL");

  const featuredProjects = companyProjects.filter((p) => p.tier === "FEATURED");
  const coreProjects = companyProjects.filter((p) => p.tier === "CORE");

  const isCompany = activeCategory === "COMPANY";

  // For personal projects, use paginated view
  const visiblePersonal = personalProjects.slice(0, visibleCount);
  const hasMore = !isCompany && visibleCount < personalProjects.length;

  const handleCategoryChange = (cat: "COMPANY" | "PERSONAL") => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, personalProjects.length));
  }, [personalProjects.length]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    const container = scrollRef.current;
    if (!sentinel || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { root: container, rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore, activeCategory]);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6">
      <SectionTitle title="PROJECT" />

      <CategorySwitch
        active={activeCategory}
        onSelect={handleCategoryChange}
        labels={{ company: t.project.company, personal: t.project.personal }}
      />

      <div
        ref={scrollRef}
        className={`${CONTAINER_HEIGHT} overflow-y-auto scrollbar-thin`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isCompany ? (
              <>
                {/* Featured Projects Group */}
                <GroupDivider title={t.project.featured} />
                {featuredProjects.map((project, i) => (
                  <ProjectEntry
                    key={project.id}
                    project={project}
                    locale={locale}
                    index={i}
                  />
                ))}

                {/* Core EMS/NMS Projects Group */}
                {coreProjects.length > 0 && (
                  <>
                    <GroupDivider
                      title={t.project.core}
                      description={t.project.coreDesc}
                    />
                    {coreProjects.map((project, i) => (
                      <CoreProjectEntry
                        key={project.id}
                        project={project}
                        locale={locale}
                        index={i}
                      />
                    ))}
                  </>
                )}
              </>
            ) : (
              <>
                {visiblePersonal.map((project, i) => (
                  <ProjectEntry
                    key={project.id}
                    project={project}
                    locale={locale}
                    index={i}
                  />
                ))}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Sentinel for infinite scroll (personal only) */}
        {hasMore && <div ref={sentinelRef} className="h-1" />}

        {/* Bottom indicator */}
        {!hasMore && !isCompany && personalProjects.length > PAGE_SIZE && (
          <p className="text-center text-xs text-foreground/30 py-6">
            {visibleCount} / {personalProjects.length}
          </p>
        )}
      </div>
    </div>
  );
}
