"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function HomeButton() {
  const { t } = useI18n();

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground mb-6 no-underline"
    >
      {t.projectDetail.backToHome}
    </Link>
  );
}
