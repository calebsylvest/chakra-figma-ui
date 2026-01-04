"use client";

import { Button } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="sm">
        <LuSun /> Light
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="outline"
      size="sm"
    >
      {isDark ? (
        <>
          <LuSun /> Light
        </>
      ) : (
        <>
          <LuMoon /> Dark
        </>
      )}
    </Button>
  );
}
