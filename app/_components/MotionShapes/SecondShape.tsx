"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  SCENE1_DELAY,
  SCENE2_DELAY,
  SCENE3_DELAY,
  FLY_UP_SPRING,
  SLIDE_SPRING,
  scene3shape1Total,
} from "./constants";

type Props = {
  isDone: boolean;
  onComplete?: () => void;
};

export default function SecondShape({ isDone, onComplete }: Props) {
  const containerControls = useAnimationControls();
  const circleControls = useAnimationControls();

  useEffect(() => {
    async function animate() {
      // Scene 1: fly up (stagger delay 0.1s)
      await containerControls.start({
        y: -10,
        transition: { ...FLY_UP_SPRING, delay: SCENE1_DELAY + 0.1 },
      });
      // Scene 2: slide to center
      await containerControls.start({
        x: 0,
        transition: { ...SLIDE_SPRING, delay: SCENE2_DELAY - SCENE1_DELAY - 0.5 },
      });
      // Scene 3: wait for shape1 then draw
      await new Promise((r) =>
        setTimeout(r, (SCENE3_DELAY - SCENE2_DELAY + scene3shape1Total) * 1000)
      );
      await circleControls.start({
        pathLength: 1,
        transition: { duration: 1 },
      });
      onComplete?.();
    }
    animate();
  }, [containerControls, circleControls, onComplete]);

  return (
    <motion.div
      initial={{ x: 50, y: 300 }}
      animate={containerControls}
      style={{ zIndex: 2 }}
      whileHover={isDone ? { y: -30 } : undefined}
      whileTap={isDone ? { scale: 0.9 } : undefined}
      transition={isDone ? { duration: 0.1, damping: 7, bounce: 0.25 } : undefined}
    >
      <svg viewBox="0 0 200 200" width="200" height="200">
        <motion.path
          d="M100 144C75.7 144 56 124.3 56 100C56 75.7 75.7 56 100 56C124.3 56 144 75.7 144 100C144 124.3 124.3 144 100 144Z"
          stroke="#00C676"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={circleControls}
        />
      </svg>
    </motion.div>
  );
}
