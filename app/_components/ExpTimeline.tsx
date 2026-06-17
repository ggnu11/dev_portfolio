"use client";

import { motion } from "framer-motion";
import parse from "html-react-parser";
import { useI18n } from "@/i18n/context";
import { resolveText, type I18nText } from "@/data";
import type { Locale } from "@/i18n/dictionaries";
import SkillKeywords from "./SkillKeywords";

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

type ExpEntry = {
  id: number;
  title: I18nText | string;
  subTitle?: I18nText | string | null;
  period: I18nText | string;
  items: (I18nText | string)[];
  links: Link[];
  isActive?: boolean | null;
  skills: Skill[];
};

function r(text: I18nText | string | null | undefined, locale: Locale): string {
  if (!text) return "";
  return resolveText(text, locale);
}

function parsePeriodMonths(period: string): number {
  const parts = period.split("-").map((s) => s.trim());
  const parseDate = (s: string) => {
    const m = s.match(/(\d{4})\.?\s*(\d{2})?/);
    if (!m) return null;
    return { year: parseInt(m[1]), month: parseInt(m[2] ?? "1") };
  };
  const start = parseDate(parts[0]);
  if (!start) return 0;
  const isOngoing = parts[1]?.includes("현재") || parts[1]?.includes("現在");
  const end = isOngoing
    ? { year: new Date().getFullYear(), month: new Date().getMonth() + 1 }
    : parseDate(parts[1] ?? "");
  if (!end) return 0;
  let months = (end.year - start.year) * 12 + (end.month - start.month);
  if (months < 1) months = 1;
  return months;
}

function formatDuration(months: number, locale: Locale): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const yr = locale === "kr" ? "년" : "年";
  const mo = locale === "kr" ? "개월" : "ヶ月";
  if (y > 0 && m > 0) return `${y}${yr} ${m}${mo}`;
  if (y > 0) return `${y}${yr}`;
  return `${m}${mo}`;
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

/* ─── Company Card ─── */
function CompanyCard({
  entry,
  locale,
  index,
}: {
  entry: ExpEntry;
  locale: Locale;
  index: number;
}) {
  const period = r(entry.period, locale);
  const months = parsePeriodMonths(period);
  const duration = months > 0 ? formatDuration(months, locale) : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="mb-14 md:mb-16 border-l-2 border-foreground/10 pl-6 md:pl-8"
    >
      {/* Period */}
      <p className="text-sm text-foreground/45 font-medium mb-2">{period}</p>

      {/* Company Header */}
      <div className="flex flex-wrap items-center gap-2.5 mb-1">
        <h3 className="text-xl md:text-2xl font-bold leading-snug">
          {parse(r(entry.title, locale))}
        </h3>
        {entry.isActive && (
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md border border-primary/40 text-primary">
            {locale === "kr" ? "재직 중" : "在職中"}
          </span>
        )}
        {duration && (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-md border border-foreground/15 text-foreground/45">
            {duration}
          </span>
        )}
      </div>

      {/* Role / Sub-title */}
      {entry.subTitle && (
        <p className="text-[15px] text-foreground/55 mt-2 font-medium">
          {r(entry.subTitle, locale)}
        </p>
      )}

      {/* Items */}
      {entry.items.length > 0 && (
        <ul className="list-none pl-0 space-y-2 mt-4">
          {entry.items.map((item, i) => (
            <li
              key={i}
              className="text-[15px] leading-relaxed text-foreground/75 pl-5 -indent-5"
            >
              <span className="text-foreground/35 mr-2.5">•</span>
              {r(item, locale)}
            </li>
          ))}
        </ul>
      )}

      {/* Skill Keywords */}
      {entry.skills.length > 0 && (
        <div className="mt-4">
          <SkillKeywords skills={entry.skills} />
        </div>
      )}

      {/* Links */}
      {entry.links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4">
          {entry.links.map((link, i) => (
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
    </motion.div>
  );
}

/* ─── Main Timeline ─── */
export default function ExpTimeline({ entries }: { entries: ExpEntry[] }) {
  const { locale } = useI18n();

  const totalMonths = entries.reduce((sum, entry) => {
    const period = r(entry.period, locale);
    return sum + parsePeriodMonths(period);
  }, 0);

  return (
    <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6">
      <SectionTitle title="EXPERIENCE" />

      {/* Total Duration */}
      {totalMonths > 0 && (
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/50">
            TOTAL
          </span>
          <span className="text-base font-bold text-primary">
            {locale === "kr" ? "총" : "合計"} {formatDuration(totalMonths, locale)}
          </span>
        </div>
      )}

      {entries.map((entry, i) => (
        <CompanyCard key={entry.id} entry={entry} locale={locale} index={i} />
      ))}
    </div>
  );
}
