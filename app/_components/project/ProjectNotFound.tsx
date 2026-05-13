"use client";

import { useI18n } from "@/i18n/context";

export default function ProjectNotFound() {
  const { t } = useI18n();
  return <div className="p-8">{t.projectDetail.notFound}</div>;
}
