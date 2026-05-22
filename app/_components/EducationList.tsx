"use client";

import { useI18n } from "@/i18n/context";
import { resolveText, type I18nText } from "@/data";
import { motion } from "framer-motion";
import { BookOpen, Award } from "react-feather";
import parse from "html-react-parser";

type EducationData = {
  id: number;
  title: I18nText | string;
  sub_title: I18nText | string;
  period: I18nText | string;
  items: (I18nText | string)[];
  category: string;
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;
const ACCENTS = ["0,122,255", "0,198,118", "226,255,0"];

export default function EducationList({
  educations,
}: {
  educations: EducationData[];
}) {
  const { locale, t } = useI18n();

  const eduItems = educations.filter((e) => e.category === "EDUCATION");
  const certItems = educations.filter((e) => e.category === "CERTIFICATION");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* ═══ LEFT: Education — Bento Cards ═══ */}
      <div className="space-y-0">
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen size={16} className="text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {locale === "kr" ? "학력" : "学歴"}
          </h3>
        </motion.div>

        <div className="flex flex-col gap-4">
          {eduItems.map((edu, i) => (
            <BentoCard
              key={edu.id}
              title={resolveText(edu.title, locale)}
              subTitle={resolveText(edu.sub_title, locale)}
              period={resolveText(edu.period, locale)}
              items={edu.items.map((item) => resolveText(item, locale))}
              accent={ACCENTS[i % 3]}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* ═══ RIGHT: Certifications — Flip Badge Cards ═══ */}
      <div className="space-y-0">
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
            <Award size={16} className="text-secondary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {locale === "kr" ? "자격증" : "資格"}
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {certItems.map((cert, i) => (
            <FlipBadge
              key={cert.id}
              title={resolveText(cert.title, locale)}
              subTitle={resolveText(cert.sub_title, locale)}
              period={resolveText(cert.period, locale)}
              accent={ACCENTS[(i + 1) % 3]}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Bento Card ─── */
function BentoCard({
  title,
  subTitle,
  period,
  items,
  accent,
  index,
}: {
  title: string;
  subTitle: string;
  period: string;
  items: string[];
  accent: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative group rounded-2xl border border-foreground/[0.08] bg-background/60 backdrop-blur-sm p-6 cursor-default overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: EASE }}
      whileHover={{ y: -4 }}
    >
      {/* Accent top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: `rgba(${accent}, 0.4)`, transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.3, duration: 0.8, ease: EASE }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px rgba(${accent}, 0.15), 0 8px 32px -8px rgba(${accent}, 0.1)`,
        }}
      />

      {/* Period badge */}
      <span
        className="inline-block text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full mb-4"
        style={{
          backgroundColor: `rgba(${accent}, 0.08)`,
          color: `rgba(${accent}, 1)`,
        }}
      >
        {period}
      </span>

      {/* Title */}
      <h4 className="text-base font-bold text-foreground mb-1 leading-snug">
        {title}
      </h4>

      {/* Subtitle */}
      <p className="text-sm text-foreground/50 mb-3">{subTitle}</p>

      {/* Items */}
      {items.length > 0 && (
        <div className="space-y-1.5 mt-3 pt-3 border-t border-foreground/[0.06]">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span
                className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                style={{ backgroundColor: `rgba(${accent}, 0.5)` }}
              />
              <p className="text-xs text-foreground/60 leading-relaxed">
                {parse(item)}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Flip Badge Card ─── */
function FlipBadge({
  title,
  subTitle,
  period,
  accent,
  index,
}: {
  title: string;
  subTitle: string;
  period: string;
  accent: string;
  index: number;
}) {
  return (
    <motion.div
      className="group"
      style={{ perspective: 800 }}
      initial={{ opacity: 0, scale: 0.85, rotateY: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: EASE }}
    >
      <div className="relative w-full aspect-[4/3] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-500">
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-foreground/[0.08] bg-background/60 backdrop-blur-sm flex flex-col items-center justify-center p-4 [backface-visibility:hidden]"
        >
          {/* Decorative ring */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
            style={{
              background: `linear-gradient(135deg, rgba(${accent}, 0.15), rgba(${accent}, 0.05))`,
              boxShadow: `0 0 0 1px rgba(${accent}, 0.2)`,
            }}
          >
            <Award
              size={20}
              style={{ color: `rgba(${accent}, 1)` }}
            />
          </div>

          <h4 className="text-sm font-bold text-foreground text-center leading-snug">
            {title}
          </h4>

          <span className="text-[10px] text-foreground/30 mt-2">
            {period}
          </span>

          {/* Flip hint */}
          <motion.span
            className="absolute bottom-2 text-[9px] text-foreground/20 tracking-wider uppercase"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            hover
          </motion.span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border flex flex-col items-center justify-center p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{
            backgroundColor: `rgba(${accent}, 0.06)`,
            borderColor: `rgba(${accent}, 0.2)`,
          }}
        >
          <span
            className="text-[11px] font-medium px-2.5 py-1 rounded-full mb-3"
            style={{
              backgroundColor: `rgba(${accent}, 0.12)`,
              color: `rgba(${accent}, 1)`,
            }}
          >
            {period}
          </span>

          <h4
            className="text-sm font-bold text-center leading-snug mb-1"
            style={{ color: `rgba(${accent}, 1)` }}
          >
            {title}
          </h4>

          <p className="text-xs text-foreground/50 text-center">{subTitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
