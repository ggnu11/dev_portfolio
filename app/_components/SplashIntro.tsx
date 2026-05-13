"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
  ReactNode,
} from "react";
import { motion, useAnimationControls } from "framer-motion";

const DOTS = [
  { color: "#007AFF", delay: 0 },
  { color: "#00C676", delay: 0.15 },
  { color: "#E2FF00", delay: 0.3 },
];

const NAME = "최영훈";
const ROLE = "Frontend Developer";

const EXIT_AFTER = 2800;
const TRANSITION_DURATION = 1.2;
const TRANSITION_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const SplashContext = createContext(false);

export function useSplashDone() {
  return useContext(SplashContext);
}

export default function SplashIntro({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"intro" | "transitioning" | "done">(
    "intro"
  );
  const film = useAnimationControls();

  const startTransition = useCallback(async () => {
    setPhase("transitioning");
    await film.start({
      y: "-50%",
      transition: { duration: TRANSITION_DURATION, ease: TRANSITION_EASE },
    });
    document.body.style.overflow = "";
    setPhase("done");
  }, [film]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(startTransition, EXIT_AFTER);
    return () => clearTimeout(timer);
  }, [startTransition]);

  // After transition, render children normally (no wrapper transform)
  if (phase === "done") {
    return (
      <SplashContext.Provider value={true}>{children}</SplashContext.Provider>
    );
  }

  return (
    <SplashContext.Provider value={false}>
      {/* Film strip: two full-screen frames stacked, moves up by 50% (one frame) */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          animate={film}
          className="will-change-transform"
          style={{ height: "200vh" }}
        >
          {/* Frame 1: Splash */}
          <div className="h-screen flex flex-col items-center justify-center bg-[rgb(15,24,42)] relative">
            <div className="flex items-center gap-3 mb-8">
              {DOTS.map((dot, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: dot.color }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.3 + dot.delay,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                />
              ))}
            </div>

            <motion.h2
              className="text-white/90 text-xl font-semibold tracking-wide"
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
              }}
            >
              {NAME}
            </motion.h2>

            <motion.p
              className="text-white/40 text-sm mt-2 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.2, duration: 0.5, ease: "easeOut" },
              }}
            >
              {ROLE}
            </motion.p>

            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-white/10"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { delay: 1.5, duration: 0.6, ease: "easeOut" },
              }}
            />
          </div>

          {/* Frame 2: Main content snapshot */}
          <div className="h-screen overflow-hidden">{children}</div>
        </motion.div>
      </div>
    </SplashContext.Provider>
  );
}
