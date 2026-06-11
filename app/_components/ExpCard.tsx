"use client";

import { useState } from "react";
import { ChevronRight } from "react-feather";
import parse from "html-react-parser";
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

type Props = {
  title: string;
  subTitle?: string | null;
  period: string;
  items: string[];
  links: Link[];
  isActive?: boolean | null;
  skills: Skill[];
};

export default function ExpCard({
  title,
  subTitle,
  period,
  items,
  links,
  isActive,
  skills,
}: Props) {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid sm:grid-cols-3 sm:gap-x-10 py-6">
      {/* Left: period */}
      <div className="flex items-start gap-2 mb-2 sm:mb-0">
        <svg
          className={isActive ? "text-primary" : "text-foreground/30"}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L14.09 8.26L20.18 8.26L15.05 12.14L17.18 18.38L12 14.5L6.82 18.38L8.95 12.14L3.82 8.26L9.91 8.26Z" />
        </svg>
        <span className="text-sm text-foreground/60">{period}</span>
      </div>

      {/* Right: details */}
      <div className="sm:col-span-2">
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
        {subTitle && (
          <p className="text-xs md:text-sm text-foreground/60 mt-1">
            {parse(subTitle)}
          </p>
        )}

        {/* Skill icons */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full bg-[#00C676] text-white border border-[#00C676]"
              >
                {skill.item}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {links.map((link) => (
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

        {/* Expandable items */}
        {items.length > 0 && (
          <div className="mt-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <ChevronRight
                size={14}
                className={`transition-transform ${expanded ? "rotate-90" : ""}`}
              />
              {expanded ? t.experience.hideDetails : t.experience.viewDetails}
            </button>
            {expanded && (
              <div className="mt-3 bg-foreground/5 rounded-lg p-4">
                <ul className="text-sm text-foreground/80 space-y-1">
                  {items.map((item, idx) => (
                    <li key={idx}>{parse(item)}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
