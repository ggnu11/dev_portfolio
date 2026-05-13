"use client";

import { useI18n } from "@/i18n/context";

export default function OutroSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-24 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold mb-4">{t.outro.title}</h2>
      <p className="text-foreground/60 mb-8 whitespace-pre-line">
        {t.outro.message}
      </p>
      <div className="w-72 md:w-80 rounded-2xl bg-dark/5 dark:bg-light/10 p-6">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-foreground/40 block mb-1">{t.outro.phone}</span>
            <span className="text-foreground/80">-</span>
          </div>
          <div>
            <span className="text-foreground/40 block mb-1">{t.outro.email}</span>
            <span className="text-foreground/80">-</span>
          </div>
          <div>
            <span className="text-foreground/40 block mb-1">{t.outro.github}</span>
            <span className="text-foreground/80">-</span>
          </div>
        </div>
      </div>
    </section>
  );
}
