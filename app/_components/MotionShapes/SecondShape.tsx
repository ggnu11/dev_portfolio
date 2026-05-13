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
  SHAPE2_DURATIONS,
  shape1DrawTime,
  wait,
} from "./constants";

const OFFSET_X = 50;
const FINAL_Y = -10;
const STAGGER = 0.1;

type Props = {
  isDone: boolean;
  onComplete: () => void;
};

export default function SecondShape({ isDone, onComplete }: Props) {
  const container = useAnimationControls();
  const circle = useAnimationControls();

  useEffect(() => {
    const t0 = performance.now();
    const elapsed = () => (performance.now() - t0) / 1000;

    async function run() {
      // Scene 1: fly up (stagger 0.1s)
      await wait(Math.max(0, SCENE1_AT + STAGGER - elapsed()) * 1000);
      await container.start({ y: FINAL_Y, transition: FLY_UP_SPRING });

      // Scene 2: spread out
      await wait(Math.max(0, SCENE2_AT - elapsed()) * 1000);
      await container.start({ x: 0, transition: SLIDE_TRANSITION });

      // Scene 3: wait for shape1, then draw ㅇ
      await wait(Math.max(0, SCENE3_AT + shape1DrawTime - elapsed()) * 1000);
      await circle.start({ pathLength: 1, transition: { duration: SHAPE2_DURATIONS.circle } });

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
      style={{ zIndex: 2 }}
      whileHover={isDone ? { y: FINAL_Y - 30 } : undefined}
      whileTap={isDone ? { scale: 0.9 } : undefined}
      transition={HOVER_SPRING}
    >
      <svg viewBox="0 0 200 200" width="200" height="200">
        <motion.path
          d="M100 144C75.7 144 56 124.3 56 100C56 75.7 75.7 56 100 56C124.3 56 144 75.7 144 100C144 124.3 124.3 144 100 144Z"
          stroke="#00C676" strokeWidth="72" strokeLinecap="round" strokeLinejoin="round" fill="none"
          initial={{ pathLength: 0 }} animate={circle}
        />
      </svg>
    </motion.div>
  );
}
