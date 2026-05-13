"use client";

import { useI18n } from "@/i18n/context";

export default function LangToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-foreground/[0.07] hover:bg-foreground/[0.12] text-xs font-semibold transition-colors"
    >
      <span className={locale === "kr" ? "text-foreground" : "text-foreground/40"}>
        KR
      </span>
      <span className="text-foreground/20">|</span>
      <span className={locale === "jp" ? "text-foreground" : "text-foreground/40"}>
        JP
      </span>
    </button>
  );
}
