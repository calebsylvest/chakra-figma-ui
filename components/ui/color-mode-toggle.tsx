"use client";

import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton aria-label="Toggle theme" variant="ghost" size="sm">
        <LuSun />
      </IconButton>
    );
  }

  const isDark = theme === "dark";

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="ghost"
      size="sm"
    >
      {isDark ? <LuSun /> : <LuMoon />}
    </IconButton>
  );
}
