"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { motion } from "framer-motion";

type SectionWatchContextType = {
  activeId: string;
  setActiveId: (id: string) => void;
};

const SectionWatchContext = createContext<SectionWatchContextType>({
  activeId: "",
  setActiveId: () => {},
});

export function SectionWatchProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("");
  return (
    <SectionWatchContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </SectionWatchContext.Provider>
  );
}

export function useSectionWatch() {
  return useContext(SectionWatchContext);
}

export function SectionWatcher({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const { setActiveId } = useSectionWatch();

  const handleViewportEnter = useCallback(() => {
    setActiveId(id);
  }, [id, setActiveId]);

  return (
    <motion.section
      id={id}
      className={className}
      onViewportEnter={handleViewportEnter}
      viewport={{ margin: "-50% 0px 0px 0px" }}
    >
      {children}
    </motion.section>
  );
}
