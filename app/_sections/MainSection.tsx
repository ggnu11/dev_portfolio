"use client";

import { useCallback } from "react";
import { Download } from "react-feather";
import FirstShape from "@/_components/MotionShapes/FirstShape";
import SecondShape from "@/_components/MotionShapes/SecondShape";
import ThirdShape from "@/_components/MotionShapes/ThirdShape";
import CTAButton from "@/_components/buttons/CTAButton";
import { useI18n } from "@/i18n/context";

export default function MainSection() {
  const handleShapeComplete = useCallback(() => {}, []);
  const { t } = useI18n();

  return (
    <section id="top" className="w-full pb-28 flex flex-col items-center pt-16">
      <div className="relative flex justify-center scale-[32%] sm:scale-[40%] origin-bottom h-[120px] sm:h-[150px] mb-20">
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

      <CTAButton
        href={process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_URL}
        icon={<Download size={16} />}
      >
        {t.hero.cta}
      </CTAButton>
    </section>
  );
}
