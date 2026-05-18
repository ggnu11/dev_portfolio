"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

type SectionWatchContextType = {
  activeId: string;
};

const SectionWatchContext = createContext<SectionWatchContextType>({
  activeId: "",
});

export function SectionWatchProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState("");
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }
        if (best?.target.id) {
          setActiveId(best.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.5],
      }
    );

    // Observe after a tick to ensure sections are mounted
    const timer = setTimeout(() => {
      sectionsRef.current.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const registerSection = (id: string, el: HTMLElement | null) => {
    if (el) {
      sectionsRef.current.set(id, el);
    } else {
      sectionsRef.current.delete(id);
    }
  };

  return (
    <SectionWatchContext.Provider value={{ activeId }}>
      <RegisterContext.Provider value={registerSection}>
        {children}
      </RegisterContext.Provider>
    </SectionWatchContext.Provider>
  );
}

const RegisterContext = createContext<
  (id: string, el: HTMLElement | null) => void
>(() => {});

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
  const register = useContext(RegisterContext);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    register(id, ref.current);
    return () => register(id, null);
  }, [id, register]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
