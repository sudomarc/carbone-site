"use client";

import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "default" | "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  ariaLabel?: string;
}

const sizes = {
  sm: { fontSize: "text-lg", dimension: 28 },
  md: { fontSize: "text-2xl", dimension: 40 },
  lg: { fontSize: "text-3xl", dimension: 56 },
  xl: { fontSize: "text-5xl", dimension: 80 },
};

export function Logo({ variant = "default", size = "md", className, ariaLabel = "CARBONE" }: LogoProps) {
  const { fontSize } = sizes[size];

  return (
    <div
      className={cn("inline-flex items-center gap-2", className)}
      aria-label={ariaLabel}
    >
      <LogoMark variant={variant} size={size} />
      <span className={cn("font-display font-bold tracking-tight", fontSize, variant === "light" ? "text-white" : "text-[var(--color-fg)]")}>
        CARBONE
      </span>
    </div>
  );
}

export function LogoMark({ variant = "default", size = "md", className }: Omit<LogoProps, "ariaLabel">) {
  const { dimension } = sizes[size];

  const style = {
    width: dimension,
    height: dimension,
    objectFit: "contain",
  } as React.CSSProperties;

  if (variant === "light") {
    style.filter = "brightness(0) invert(1)";
  } else if (variant === "dark") {
    style.filter = "brightness(0)";
  }

  return (
    <span
      style={style}
      className={cn(className)}
      aria-hidden="true"
    >
      <img
        src="/carbone-logo.png"
        alt=""
        width={dimension}
        height={dimension}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        loading="lazy"
        aria-hidden="true"
      />
    </span>
  );
}