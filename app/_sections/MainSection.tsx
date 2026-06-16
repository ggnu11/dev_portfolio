"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FileText, Download } from "react-feather";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import FirstShape from "@/_components/MotionShapes/FirstShape";
import SecondShape from "@/_components/MotionShapes/SecondShape";
import ThirdShape from "@/_components/MotionShapes/ThirdShape";
import { useI18n } from "@/i18n/context";

const EASE_CINEMATIC = [0.25, 0.46, 0.45, 0.94] as const;
const ACCENT = "0, 122, 255";

interface DocItem {
  key: string;
  label: { kr: string; jp: string };
  pdf: { kr?: string; jp?: string };
  imagePrefix: { kr?: string; jp?: string };
  pages: { kr?: number; jp?: number };
}

const DOCS: DocItem[] = [
  {
    key: "resume",
    label: { kr: "국문 이력서", jp: "履歴書" },
    pdf: { kr: "/resume/kr/resume.pdf", jp: "/resume/jp/resume.pdf" },
    imagePrefix: { kr: "/resume/pages/kr/resume", jp: "/resume/pages/jp/resume" },
    pages: { kr: 5, jp: 4 },
  },
  {
    key: "career",
    label: { kr: "직무경력서", jp: "職務経歴書" },
    pdf: { jp: "/resume/jp/career-history.pdf" },
    imagePrefix: { jp: "/resume/pages/jp/career" },
    pages: { jp: 4 },
  },
];

export default function MainSection() {
  const handleShapeComplete = useCallback(() => {}, []);
  const { locale, t } = useI18n();
  const [activeDoc, setActiveDoc] = useState<DocItem | null>(null);

  const close = useCallback(() => setActiveDoc(null), []);

  useEffect(() => {
    if (!activeDoc) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeDoc, close]);

  const visibleDocs = DOCS.filter((doc) => doc.pdf[locale]);

  return (
    <>
      <section id="top" className="w-full pb-28 flex flex-col items-center pt-16">
        <div className="relative flex justify-center gap-6 scale-[28%] sm:scale-[40%] origin-bottom h-[100px] sm:h-[150px] mb-12 sm:mb-20 -translate-x-6">
          <FirstShape onComplete={handleShapeComplete} />
          <SecondShape onComplete={handleShapeComplete} />
          <ThirdShape onComplete={handleShapeComplete} />
        </div>

        <h1 className="bg-light z-40 dark:bg-dark px-4">
          {t.hero.greeting}
          <br />
          {t.hero.role}
          <br />
          <em>{t.hero.name}</em>.
        </h1>

        <p className="text-base md:text-lg text-gray-400 text-center mt-4 mb-8">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {visibleDocs.map((doc) => {
            const label = doc.label[locale]!;
            return (
              <button
                key={doc.key}
                onClick={() => setActiveDoc(doc)}
                className="relative flex items-center justify-center gap-2 px-7 py-2 min-w-40 bg-foreground/5 rounded-lg hover:bg-foreground/10 text-foreground/65 font-semibold text-base md:text-sm transition-colors"
              >
                <motion.span layoutId={`doc-label-${doc.key}`}>
                  {label}
                </motion.span>
                <FileText size={16} />
              </button>
            );
          })}
        </div>
      </section>

      <AnimatePresence>
        {activeDoc && (
          <ResumeCinematic
            doc={activeDoc}
            locale={locale}
            downloadLabel={t.resume.download}
            scrollLabel={t.resume.scroll}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Resume Cinematic View ─── */
function ResumeCinematic({
  doc,
  locale,
  downloadLabel,
  scrollLabel,
  onClose,
}: {
  doc: DocItem;
  locale: string;
  downloadLabel: string;
  scrollLabel: string;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const loc = locale as "kr" | "jp";
  const pdfUrl = doc.pdf[loc]!;
  const label = doc.label[loc]!;
  const prefix = doc.imagePrefix[loc]!;
  const pageCount = doc.pages[loc] ?? 1;

  const pageImages = Array.from({ length: pageCount }, (_, i) => `${prefix}-${i + 1}.png`);

  const { scrollYProgress } = useScroll({ container: scrollRef });

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col cursor-back"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE_CINEMATIC }}
      onClick={onClose}
    >
      {/* Background — follows dark/light mode */}
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
      />

      {/* Fixed bottom download button */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[1005]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: EASE_CINEMATIC }}
      >
        <a
          href={pdfUrl}
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C676] text-white text-sm font-semibold hover:bg-[#00b36a] no-underline transition-colors cursor-pointer shadow-lg shadow-[#00C676]/25"
          onClick={(e) => e.stopPropagation()}
        >
          <Download size={14} />
          {downloadLabel}
        </a>
      </motion.div>

      {/* Scroll progress indicator */}
      <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-[1004]">
        <motion.div
          className="w-[2px] rounded-full"
          style={{ height: 60, backgroundColor: `rgba(${ACCENT}, 0.1)` }}
        >
          <motion.div
            className="w-full rounded-full"
            style={{
              height: useTransform(scrollYProgress, [0, 1], [0, 60]),
              backgroundColor: `rgba(${ACCENT}, 0.5)`,
            }}
          />
        </motion.div>
      </div>

      {/* Scrollable content */}
      <motion.div
        ref={scrollRef}
        className="relative z-[1001] h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hero */}
        <div className="pt-10 pb-6 flex flex-col items-center justify-center px-4">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{
              background: `radial-gradient(ellipse 60% 40% at 50% 30%, rgba(${ACCENT}, 0.06) 0%, transparent 100%)`,
            }}
          />

          <motion.div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.h1
              layoutId={`doc-label-${doc.key}`}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center leading-tight mb-6"
              transition={{ duration: 0.5, ease: EASE_CINEMATIC }}
            >
              {label}
            </motion.h1>

          </motion.div>

        </div>

        {/* Page images */}
        <div className="relative">

          <div className="bg-background pb-16 sm:pb-24">
            <div className="max-w-[700px] mx-auto flex flex-col gap-4 px-4">
              {pageImages.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.5,
                    ease: EASE_CINEMATIC,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={src}
                    alt={`${label} - ${i + 1}`}
                    width={1400}
                    height={1980}
                    className="w-full h-auto rounded-lg"
                    priority={i === 0}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="h-[1px] mx-auto max-w-md"
            style={{
              background: `linear-gradient(to right, transparent, rgba(${ACCENT}, 0.15), transparent)`,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
