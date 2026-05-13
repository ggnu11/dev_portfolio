"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  SCENE1_AT,
  SCENE2_AT,
  SCENE3_AT,
  FLY_UP_SPRING,
  SLIDE_TRANSITION,
  HOVER_SPRING,
  SHAPE1_DURATIONS,
  wait,
} from "./constants";

// x:250 offsets this shape from its flex position toward center (overlapping with others)
// x:0 = natural flex position (side by side)
const OFFSET_X = 250;
const FINAL_Y = -10;

type Props = {
  isDone: boolean;
  onComplete: () => void;
};

export default function FirstShape({ isDone, onComplete }: Props) {
  const container = useAnimationControls();
  const dot = useAnimationControls();
  const bar = useAnimationControls();
  const chevron = useAnimationControls();

  useEffect(() => {
    const t0 = performance.now();
    const elapsed = () => (performance.now() - t0) / 1000;

    async function run() {
      // Scene 1: fly up (dots overlapping, x offset unchanged)
      await wait(Math.max(0, SCENE1_AT - elapsed()) * 1000);
      await container.start({ y: FINAL_Y, transition: FLY_UP_SPRING });

      // Scene 2: spread out to natural flex position
      await wait(Math.max(0, SCENE2_AT - elapsed()) * 1000);
      await container.start({ x: 0, transition: SLIDE_TRANSITION });

      // Scene 3: draw ㅊ
      await wait(Math.max(0, SCENE3_AT - elapsed()) * 1000);
      await dot.start({ scale: 1, transition: { duration: SHAPE1_DURATIONS.dot } });
      bar.start({ pathLength: 1, transition: { duration: SHAPE1_DURATIONS.bar } });
      await wait(SHAPE1_DURATIONS.bar * 1000 - 300);
      await chevron.start({ pathLength: 1, transition: { duration: SHAPE1_DURATIONS.chevron } });

      // Lock base state so hover returns here
      container.set({ x: 0, y: FINAL_Y });
      onComplete();
    }

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ x: OFFSET_X, y: 300 }}
      animate={container}
      style={{ zIndex: 3 }}
      whileHover={isDone ? { y: FINAL_Y - 30 } : undefined}
      whileTap={isDone ? { scale: 0.9 } : undefined}
      transition={HOVER_SPRING}
    >
      <svg viewBox="0 0 200 200" width="200" height="200">
        <motion.circle cx="100" cy="25" r="16" fill="#007AFF" initial={{ scale: 0 }} animate={dot} />
        <motion.path
          d="M55 80H145"
          stroke="#007AFF" strokeWidth="72" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0 }} animate={bar}
        />
        <motion.path
          d="M50 155L100 108L150 155"
          stroke="#007AFF" strokeWidth="72" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0 }} animate={chevron}
        />
      </svg>
    </motion.div>
  );
}
