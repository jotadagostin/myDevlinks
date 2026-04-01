"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.5)"
          : "1px solid rgba(0,0,0,0.5)",
      }}
    >
      <span
        className="inline-block h-4 w-4 rounded-full transition-transform duration-300"
        style={{
          backgroundColor: isDark ? "#ffffff" : "#000000",
          transform: isDark ? "translateX(24px)" : "translateX(4px)",
        }}
      />
    </button>
  );
}
