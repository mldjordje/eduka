"use client";

import { HeroUIProvider } from "@heroui/react";
import { useMemo } from "react";

export function HeroProvider({ children }: { children: React.ReactNode }) {
  const locale = useMemo(
    () => (typeof navigator !== "undefined" ? navigator.language || "sr-RS" : "sr-RS"),
    []
  );

  return <HeroUIProvider locale={locale}>{children}</HeroUIProvider>;
}
