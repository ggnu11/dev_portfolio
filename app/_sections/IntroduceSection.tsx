"use client";

import SlideUpInView from "@/_components/SlideUpInView";
import { useI18n } from "@/i18n/context";

const LAST_UPDATED = "2025.06.15";

export default function IntroduceSection() {
  const { t } = useI18n();
  const { paragraphs, lastUpdated } = t.introduce;

  return (
    <section id="introduce" className="w-full">
      <SlideUpInView>
        <p className="section-eyebrow">{t.introduce.eyebrow}</p>

        <div className="mt-6 space-y-4">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-[15px] md:text-base leading-relaxed text-foreground/75"
            >
              {text}
            </p>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            {lastUpdated}: {LAST_UPDATED}
          </span>
        </div>
      </SlideUpInView>
    </section>
  );
}
