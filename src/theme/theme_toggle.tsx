"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded-lg border border-[var(--border-white)]/80 hover:bg-white/10 transition cursor-pointer text-[var(--foreground)] text-lg"
      aria-label="Changer de thème"
    >
      {theme === "dark" ? "☀︎" : "⏾"}
    </button>
  );
}