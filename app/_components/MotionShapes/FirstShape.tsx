"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  SCENE1_DELAY,
  SCENE2_DELAY,
  SCENE3_DELAY,
  FLY_UP_SPRING,
  SLIDE_SPRING,
  SHAPE1_DURATIONS,
} from "./constants";

type Props = {
  isDone: boolean;
  onComplete?: () => void;
};

export default function FirstShape({ isDone, onComplete }: Props) {
  const containerControls = useAnimationControls();
  const dotControls = useAnimationControls();
  const barControls = useAnimationControls();
  const chevronControls = useAnimationControls();

  useEffect(() => {
    async function animate() {
      // Scene 1: fly up
      await containerControls.start({
        y: -10,
        transition: { ...FLY_UP_SPRING, delay: SCENE1_DELAY },
      });
      // Scene 2: slide to center
      await containerControls.start({
        x: 0,
        transition: { ...SLIDE_SPRING, delay: SCENE2_DELAY - SCENE1_DELAY - 0.5 },
      });
      // Scene 3: draw paths
      await new Promise((r) => setTimeout(r, (SCENE3_DELAY - SCENE2_DELAY) * 1000));
      await dotControls.start({
        scale: 1,
        transition: { duration: SHAPE1_DURATIONS[0] },
      });
      barControls.start({
        pathLength: 1,
        transition: { duration: SHAPE1_DURATIONS[1] },
      });
      await new Promise((r) => setTimeout(r, 500));
      await chevronControls.start({
        pathLength: 1,
        transition: { duration: SHAPE1_DURATIONS[2] },
      });
      onComplete?.();
    }
    animate();
  }, [containerControls, dotControls, barControls, chevronControls, onComplete]);

  return (
    <motion.div
      initial={{ x: 250, y: 300 }}
      animate={containerControls}
      style={{ zIndex: 3 }}
      whileHover={isDone ? { y: -30 } : undefined}
      whileTap={isDone ? { scale: 0.9 } : undefined}
      transition={isDone ? { duration: 0.1, damping: 7, bounce: 0.25 } : undefined}
    >
      <svg viewBox="0 0 200 200" width="200" height="200">
        {/* Dot */}
        <motion.circle
          cx="100"
          cy="25"
          r="16"
          fill="#007AFF"
          initial={{ scale: 0 }}
          animate={dotControls}
        />
        {/* Bar */}
        <motion.path
          d="M55 80H145"
          stroke="#007AFF"
          strokeWidth="72"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={barControls}
        />
        {/* Chevron */}
        <motion.path
          d="M50 155L100 108L150 155"
          stroke="#007AFF"
          strokeWidth="72"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={chevronControls}
        />
      </svg>
    </motion.div>
  );
}
