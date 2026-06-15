"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { resolveText } from "@/data";
import { japanTimeline } from "@/data";
import { SectionWatcher } from "@/_components/SectionWatcher";

export default function JapanSection() {
  const { locale, t } = useI18n();

  return (
    <SectionWatcher id="japan">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="!text-left text-sm md:text-base font-bold tracking-[0.2em] uppercase text-primary mb-3">
            {t.japan.eyebrow}
          </h2>
          <div className="h-[2px] bg-foreground/20" />
        </div>

        <div className="relative border-l-2 border-foreground/10 ml-2 md:ml-4">
          {japanTimeline.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-6 md:pl-8 pb-8 last:pb-0"
            >
              {/* Dot on timeline */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

              <p className="text-xs text-foreground/45 font-medium mb-1">
                {entry.period}
              </p>
              <h3 className="text-base md:text-lg font-bold mb-2">
                {resolveText(entry.title, locale)}
              </h3>
              {entry.items.length > 0 && (
                <ul className="list-none pl-0 space-y-1">
                  {entry.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[14px] leading-relaxed text-foreground/70 pl-4 -indent-4"
                    >
                      <span className="text-foreground/35 mr-2">•</span>
                      {resolveText(item, locale)}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWatcher>
  );
}
