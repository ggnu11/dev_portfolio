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
  const content = useAnimationControls();

  const startTransition = useCallback(async () => {
    setPhase("transitioning");
    // 필름(splash)은 위로 올라가고, children은 100vh 아래에서 동시에 올라옴
    await Promise.all([
      film.start({
        y: "-100%",
        transition: { duration: TRANSITION_DURATION, ease: TRANSITION_EASE },
      }),
      content.start({
        y: 0,
        transition: { duration: TRANSITION_DURATION, ease: TRANSITION_EASE },
      }),
    ]);
    document.body.style.overflow = "";
    setPhase("done");
  }, [film, content]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(startTransition, EXIT_AFTER);
    return () => clearTimeout(timer);
  }, [startTransition]);

  const isDone = phase === "done";

  return (
    <SplashContext.Provider value={isDone}>
      {/* Splash 오버레이 — 위로 올라가며 사라짐 */}
      {!isDone && (
        <motion.div
          animate={film}
          className="fixed inset-0 z-[9999] will-change-transform"
        >
          <div className="h-screen flex flex-col items-center justify-center bg-background relative">
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
              className="text-foreground/90 text-xl font-semibold tracking-wide"
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
              className="text-foreground/40 text-sm mt-2 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.2, duration: 0.5, ease: "easeOut" },
              }}
            >
              {ROLE}
            </motion.p>

            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-foreground/10"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { delay: 1.5, duration: 0.6, ease: "easeOut" },
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Children — 항상 같은 트리 위치 (remount 없음)
           필름 전환 시 아래(100vh)에서 위(0)로 올라와서 필름 효과 연출 */}
      <motion.div
        animate={content}
        initial={{ y: "100vh" }}
        className={isDone ? "" : "fixed inset-0 overflow-hidden will-change-transform"}
      >
        {children}
      </motion.div>
    </SplashContext.Provider>
  );
}
