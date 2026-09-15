"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="icon-btn"
    >
      <Sun
        className="dark:hidden"
        size={18}
      />

      <Moon
        className="hidden dark:block"
        size={18}
      />
    </button>
  );
}