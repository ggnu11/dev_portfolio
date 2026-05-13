"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import {
  SCENE1_AT,
  SCENE2_AT,
  SCENE3_AT,
  FLY_UP_SPRING,
  SLIDE_TRANSITION,
  SHAPE3_DURATIONS,
  shape1DrawTime,
  shape2DrawTime,
  wait,
} from "./constants";

const OFFSET_X = -150;
const FINAL_Y = -10;
const STAGGER = 0.2;

type Props = {
  onComplete: () => void;
};

export default function ThirdShape({ onComplete }: Props) {
  const container = useAnimationControls();
  const representDot = useAnimationControls();
  const dot = useAnimationControls();
  const bar = useAnimationControls();
  const circle = useAnimationControls();

  useEffect(() => {
    const t0 = performance.now();
    const elapsed = () => (performance.now() - t0) / 1000;

    async function run() {
      // Scene 1: fly up (stagger 0.2s)
      await wait(Math.max(0, SCENE1_AT + STAGGER - elapsed()) * 1000);
      await container.start({ y: FINAL_Y, transition: FLY_UP_SPRING });

      // Scene 2: spread out
      await wait(Math.max(0, SCENE2_AT - elapsed()) * 1000);
      await container.start({ x: 0, transition: SLIDE_TRANSITION });

      // Scene 3: hide represent dot, then draw ㅎ
      await wait(
        Math.max(0, SCENE3_AT + shape1DrawTime + shape2DrawTime - elapsed()) *
          1000
      );
      representDot.start({ scale: 0, transition: { duration: 0.15 } });
      await dot.start({
        scale: 1,
        transition: { duration: SHAPE3_DURATIONS.dot },
      });
      bar.start({
        opacity: 1,
        pathLength: 1,
        transition: { duration: SHAPE3_DURATIONS.bar },
      });
      await wait(SHAPE3_DURATIONS.bar * 1000 - 300);
      await circle.start({
        opacity: 1,
        pathLength: 1,
        transition: { duration: SHAPE3_DURATIONS.circle },
      });

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
      style={{ zIndex: 1 }}
    >
      <svg viewBox="0 0 220 220" width="200" height="200">
        <motion.circle
          cx="110"
          cy="110"
          r="20"
          fill="#E2FF00"
          initial={{ scale: 1 }}
          animate={representDot}
        />
        <motion.circle
          cx="100"
          cy="25"
          r="16"
          fill="#E2FF00"
          initial={{ scale: 0 }}
          animate={dot}
        />
        <motion.path
          d="M55 75H145"
          stroke="#E2FF00"
          strokeWidth="72"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={bar}
        />
        <motion.circle
          cx="100"
          cy="145"
          r="38"
          stroke="#E2FF00"
          strokeWidth="72"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={circle}
        />
      </svg>
    </motion.div>
  );
}
