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
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const sections = sectionsRef.current;
    if (sections.size === 0) return;

    // Use scroll-based detection for more accurate tracking
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestId = "";
      let closestDist = Infinity;

      sections.forEach((el, id) => {
        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDist) {
          closestId = id;
          closestDist = distance;
        }
      });

      if (closestId) {
        setActiveId(closestId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [version]);

  const registerSection = (id: string, el: HTMLElement | null) => {
    if (el) {
      sectionsRef.current.set(id, el);
    } else {
      sectionsRef.current.delete(id);
    }
    setVersion((v) => v + 1);
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
