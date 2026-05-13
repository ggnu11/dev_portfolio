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
  scene3shape2Total,
  SHAPE3_DURATIONS,
} from "./constants";

type Props = {
  isDone: boolean;
  onComplete?: () => void;
};

export default function ThirdShape({ isDone, onComplete }: Props) {
  const containerControls = useAnimationControls();
  const dotControls = useAnimationControls();
  const barControls = useAnimationControls();
  const circleControls = useAnimationControls();

  useEffect(() => {
    async function animate() {
      // Scene 1: fly up (stagger delay 0.2s)
      await containerControls.start({
        y: -10,
        transition: { ...FLY_UP_SPRING, delay: SCENE1_DELAY + 0.2 },
      });
      // Scene 2: slide to center
      await containerControls.start({
        x: 0,
        transition: { ...SLIDE_SPRING, delay: SCENE2_DELAY - SCENE1_DELAY - 0.5 },
      });
      // Scene 3: wait for shape1+2 then draw
      await new Promise((r) =>
        setTimeout(r, (SCENE3_DELAY - SCENE2_DELAY + scene3shape1Total + scene3shape2Total) * 1000)
      );
      await dotControls.start({
        scale: 1,
        transition: { duration: SHAPE3_DURATIONS[0] },
      });
      barControls.start({
        pathLength: 1,
        transition: { duration: SHAPE3_DURATIONS[1] },
      });
      await new Promise((r) => setTimeout(r, 500));
      await circleControls.start({
        pathLength: 1,
        transition: { duration: SHAPE3_DURATIONS[2] },
      });
      onComplete?.();
    }
    animate();
  }, [containerControls, dotControls, barControls, circleControls, onComplete]);

  return (
    <motion.div
      initial={{ x: -150, y: 300 }}
      animate={containerControls}
      style={{ zIndex: 1 }}
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
          fill="#E2FF00"
          initial={{ scale: 0 }}
          animate={dotControls}
        />
        {/* Bar */}
        <motion.path
          d="M55 75H145"
          stroke="#E2FF00"
          strokeWidth="72"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={barControls}
        />
        {/* Circle */}
        <motion.circle
          cx="100"
          cy="145"
          r="38"
          stroke="#E2FF00"
          strokeWidth="72"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={circleControls}
        />
      </svg>
    </motion.div>
  );
}
