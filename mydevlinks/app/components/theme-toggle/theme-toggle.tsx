"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

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
      className="relative inline-flex h-6 w-16 items-center rounded-full transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.5)"
          : "1px solid rgba(0,0,0,0.5)",
      }}
    >
      {/* Bolinha deslizante */}
      <span
        className="relative inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 z-10"
        style={{
          backgroundColor: isDark ? "#ffffff" : "#000000",
          transform: isDark ? "translateX(34px)" : "translateX(0px)",
        }}
      >
        <span
          className="text-base"
          style={{ color: isDark ? "#000000" : "#ffffff" }}
        >
          {isDark ? <RiMoonLine /> : <RiSunLine />}
        </span>
      </span>
    </button>
  );
}
