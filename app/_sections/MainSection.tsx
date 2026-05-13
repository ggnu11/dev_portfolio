"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Download } from "react-feather";
import FirstShape from "@/_components/MotionShapes/FirstShape";
import SecondShape from "@/_components/MotionShapes/SecondShape";
import ThirdShape from "@/_components/MotionShapes/ThirdShape";
import CTAButton from "@/_components/buttons/CTAButton";

export default function MainSection() {
  const [isDone, setIsDone] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const handleShapeComplete = useCallback(() => {
    setCompletedCount((c) => {
      const next = c + 1;
      if (next >= 3) setIsDone(true);
      return next;
    });
  }, []);

  return (
    <section id="top" className="w-full pb-28 flex flex-col items-center pt-16">
      {/* Animated shapes */}
      <div className="relative flex justify-center scale-[32%] sm:scale-[40%] origin-bottom h-[80px] sm:h-[100px] mb-8">
        <FirstShape isDone={isDone} onComplete={handleShapeComplete} />
        <SecondShape isDone={isDone} onComplete={handleShapeComplete} />
        <ThirdShape isDone={isDone} onComplete={handleShapeComplete} />
      </div>

      {/* Hero text — hidden until animation completes */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={isDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
      </motion.div>
    </section>
  );
}
