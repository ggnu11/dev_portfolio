"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { resolveText } from "@/data";
import { documentations } from "@/data";
import { SectionWatcher } from "@/_components/SectionWatcher";

export default function DocumentationSection() {
  const { locale, t } = useI18n();

  return (
    <SectionWatcher id="documentation">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="!text-left text-sm md:text-base font-bold tracking-[0.2em] uppercase text-primary mb-3">
            {t.documentation.eyebrow}
          </h2>
          <div className="h-[2px] bg-foreground/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {documentations.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="border border-foreground/10 rounded-xl p-5 md:p-6"
            >
              <h3 className="text-base md:text-lg font-bold mb-3">
                {resolveText(doc.title, locale)}
              </h3>
              <ul className="list-none pl-0 space-y-1.5">
                {doc.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-[14px] leading-relaxed text-foreground/70 pl-4 -indent-4"
                  >
                    <span className="text-foreground/35 mr-2">•</span>
                    {resolveText(item, locale)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWatcher>
  );
}
