"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

const DOTS = [
  { color: "#007AFF", delay: 0 },
  { color: "#00C676", delay: 0.15 },
  { color: "#E2FF00", delay: 0.3 },
];

const NAME = "최영훈";
const ROLE = "Frontend Developer";

const EXIT_AFTER = 2800;

const SplashContext = createContext(false);

export function useSplashDone() {
  return useContext(SplashContext);
}

export default function SplashIntro({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setShow(false), EXIT_AFTER);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContext.Provider value={done}>
      <AnimatePresence
        onExitComplete={() => {
          document.body.style.overflow = "";
          setDone(true);
        }}
      >
        {show && (
          <motion.div
            key="splash"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[rgb(15,24,42)]"
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Dots */}
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

            {/* Name */}
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

            {/* Role */}
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

            {/* Bottom line accent */}
            <motion.div
              className="absolute bottom-12 w-8 h-[2px] rounded-full bg-white/10"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: 1,
                transition: { delay: 1.5, duration: 0.6, ease: "easeOut" },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </SplashContext.Provider>
  );
}
