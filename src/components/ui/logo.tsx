"use client";

import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "default" | "light" | "dark" | "mono";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  ariaLabel?: string;
}

const sizes = {
  sm: { width: 28, height: 28, fontSize: "text-lg" },
  md: { width: 40, height: 40, fontSize: "text-2xl" },
  lg: { width: 56, height: 56, fontSize: "text-3xl" },
  xl: { width: 80, height: 80, fontSize: "text-5xl" },
};

export function Logo({ variant = "default", size = "md", className, ariaLabel = "CARBONE" }: LogoProps) {
  const { width, height, fontSize } = sizes[size];

  const logoMark = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("flex-shrink-0", variant === "light" && "text-white", variant === "dark" && "text-[#0a0a0a]")}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" stroke="url(#logoGradient)" strokeWidth="4" className={variant === "mono" ? "stroke-current" : ""} />
      <path
        d="M30 50 L45 65 L70 35"
        stroke="url(#logoGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={variant === "mono" ? "stroke-current" : ""}
      />
    </svg>
  );

  return (
    <div
      className={cn("inline-flex items-center gap-2", className)}
      aria-label={ariaLabel}
    >
      {logoMark}
      <span className={cn("font-display font-bold tracking-tight", fontSize, variant === "light" ? "text-white" : "text-[var(--color-fg)]")}>
        CARBONE
      </span>
    </div>
  );
}

export function LogoMark({ variant = "default", size = "md", className }: Omit<LogoProps, "ariaLabel">) {
  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(variant === "light" && "text-white", variant === "dark" && "text-[#0a0a0a]", className)}
    >
      <defs>
        <linearGradient id="logoGradientMark" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" stroke="url(#logoGradientMark)" strokeWidth="4" className={variant === "mono" ? "stroke-current" : ""} />
      <path
        d="M30 50 L45 65 L70 35"
        stroke="url(#logoGradientMark)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={variant === "mono" ? "stroke-current" : ""}
      />
    </svg>
  );
}