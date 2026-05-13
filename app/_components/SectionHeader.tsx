"use client";

import { useI18n } from "@/i18n/context";

type SectionKey = "intro" | "skill" | "experience" | "project" | "blog" | "education";

export default function SectionHeader({ section }: { section: SectionKey }) {
  const { t } = useI18n();
  const data = t[section];

  return (
    <>
      <p className="section-eyebrow">{data.eyebrow}</p>
      <h2 className="section-title">{data.title}</h2>
    </>
  );
}
