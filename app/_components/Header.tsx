"use client";

import { useState, useRef, useCallback } from "react";
import { Menu, X } from "react-feather";
import { useAnimate, stagger } from "framer-motion";
import Logo from "./Logo";
import { useSectionWatch } from "./SectionWatcher";
import { useOnClickOutside } from "@/utils/useOnClickOutside";

const NAV_ITEMS = [
  { id: "skill", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
  { id: "blog", label: "Blog" },
];

export default function Header({ className }: { className?: string }) {
  const { activeId } = useSectionWatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useOnClickOutside(menuRef, () => setIsExpanded(false));

  const toggleMenu = useCallback(async () => {
    const next = !isExpanded;
    setIsExpanded(next);

    if (scope.current) {
      await animate(
        scope.current,
        {
          clipPath: next
            ? "inset(0% 0% 0% 0% round 16px)"
            : "inset(0% 10% 100% 90% round 16px)",
        },
        { type: "spring", bounce: 0, duration: 0.5 }
      );
      if (next) {
        animate(
          ".mobile-nav-item",
          { opacity: 1 },
          { duration: 0.2, delay: stagger(0.1, { startDelay: 0.15 }) }
        );
      }
    }
  }, [isExpanded, scope, animate]);

  return (
    <div className={`sticky top-4 z-50 w-full ${className || ""}`} ref={menuRef}>
      {/* Header bar */}
      <div className="h-10 md:h-12 rounded-full bg-foreground/[0.07] backdrop-blur-lg dark:bg-light/10 flex items-center justify-between px-4 md:px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium no-underline transition-colors ${
                activeId === item.id
                  ? "bg-background text-foreground"
                  : "text-foreground/60"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden"
          onClick={toggleMenu}
        >
          {isExpanded ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        ref={scope}
        className="sm:hidden absolute top-14 right-0 left-0 bg-foreground/[0.07] backdrop-blur-lg dark:bg-light/10 rounded-2xl p-4"
        style={{
          clipPath: "inset(0% 10% 100% 90% round 16px)",
          pointerEvents: isExpanded ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-item px-4 py-2 rounded-lg text-sm font-medium no-underline opacity-0 ${
                activeId === item.id
                  ? "bg-background text-foreground"
                  : "text-foreground/60"
              }`}
              onClick={() => setIsExpanded(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
