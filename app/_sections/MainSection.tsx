"use client";

import { useCallback } from "react";
import { Download } from "react-feather";
import FirstShape from "@/_components/MotionShapes/FirstShape";
import SecondShape from "@/_components/MotionShapes/SecondShape";
import ThirdShape from "@/_components/MotionShapes/ThirdShape";
import CTAButton from "@/_components/buttons/CTAButton";

export default function MainSection() {
  const handleShapeComplete = useCallback(() => {}, []);

  return (
    <section id="top" className="w-full pb-28 flex flex-col items-center pt-16">
      {/* Animated shapes */}
      <div className="relative flex justify-center scale-[32%] sm:scale-[40%] origin-bottom h-[120px] sm:h-[150px] mb-20">
        <FirstShape onComplete={handleShapeComplete} />
        <SecondShape onComplete={handleShapeComplete} />
        <ThirdShape onComplete={handleShapeComplete} />
      </div>

      {/* Hero text */}
      <h1 className="bg-light z-40 dark:bg-dark px-4">
        Hello,
        <br />
        I&apos;m a frontend developer
        <br />
        <em>Choi Young-Hun</em>.
      </h1>

      <p className="text-base md:text-lg text-gray-400 text-center mt-4 mb-8">
        Crafting seamless web experiences with modern technologies.
      </p>

      <CTAButton
        href={process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_URL}
        icon={<Download size={16} />}
      >
        Download Resume
      </CTAButton>
    </section>
  );
}
