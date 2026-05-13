"use client";

import { Sun, Moon } from "react-feather";
import { useTheme } from "@/theme/context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground/[0.07] hover:bg-foreground/[0.12] transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={14} className="text-foreground/60" />
      ) : (
        <Moon size={14} className="text-foreground/60" />
      )}
    </button>
  );
}
