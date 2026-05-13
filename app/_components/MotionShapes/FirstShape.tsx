"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  SCENE1_AT,
  SCENE2_AT,
  SCENE3_AT,
  FLY_UP_SPRING,
  SLIDE_TRANSITION,
  SHAPE1_DURATIONS,
  SPREAD_X,
  wait,
} from "./constants";

const OFFSET_X = 250;
const FINAL_Y = -10;

type Props = {
  onComplete: () => void;
};

export default function FirstShape({ onComplete }: Props) {
  const container = useAnimationControls();
  const representDot = useAnimationControls();
  const dot = useAnimationControls();
  const bar = useAnimationControls();
  const chevron = useAnimationControls();

  useEffect(() => {
    const t0 = performance.now();
    const elapsed = () => (performance.now() - t0) / 1000;

    async function run() {
      // Scene 1: fly up
      await wait(Math.max(0, SCENE1_AT - elapsed()) * 1000);
      await container.start({ y: FINAL_Y, transition: FLY_UP_SPRING });

      // Scene 2: spread out to natural flex position
      await wait(Math.max(0, SCENE2_AT - elapsed()) * 1000);
      await container.start({ x: SPREAD_X, transition: SLIDE_TRANSITION });

      // Scene 3: hide represent dot, then draw ㅊ
      await wait(Math.max(0, SCENE3_AT - elapsed()) * 1000);
      representDot.start({ scale: 0, transition: { duration: 0.15 } });
      await dot.start({ scale: 1, transition: { duration: SHAPE1_DURATIONS.dot } });
      bar.start({ opacity: 1, pathLength: 1, transition: { duration: SHAPE1_DURATIONS.bar } });
      await wait(SHAPE1_DURATIONS.bar * 1000 - 300);
      await chevron.start({ opacity: 1, pathLength: 1, transition: { duration: SHAPE1_DURATIONS.chevron } });

      container.set({ x: SPREAD_X, y: FINAL_Y });
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
    >
      <svg viewBox="0 0 200 200" width="200" height="200">
        <motion.circle cx="100" cy="100" r="20" fill="#007AFF" initial={{ scale: 1 }} animate={representDot} />
        <motion.circle cx="100" cy="25" r="16" fill="#007AFF" initial={{ scale: 0 }} animate={dot} />
        <motion.path
          d="M55 80H145"
          stroke="#007AFF" strokeWidth="72" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} animate={bar}
        />
        <motion.path
          d="M50 155L100 108L150 155"
          stroke="#007AFF" strokeWidth="72" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0, opacity: 0 }} animate={chevron}
        />
      </svg>
    </motion.div>
  );
}
