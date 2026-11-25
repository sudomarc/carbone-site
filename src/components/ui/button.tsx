"use client";

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes, ElementType, Ref } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  asChild?: boolean;
  as?: ElementType;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, as: Component = "button", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:bg-[var(--color-accent-hover)] focus-visible:ring-[var(--color-accent)] shadow-sm",
      secondary: "bg-[var(--color-bg-muted)] text-[var(--color-fg)] hover:bg-[var(--color-border)] focus-visible:ring-[var(--color-border-strong)] border border-[var(--color-border)]",
      outline: "border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-muted)] focus-visible:ring-[var(--color-accent)]",
      ghost: "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-bg-muted)] focus-visible:ring-[var(--color-border-strong)]",
      danger: "bg-[var(--color-error)] text-white hover:bg-[#c00] focus-visible:ring-[var(--color-error)]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-5 py-2.5 text-base gap-2",
      lg: "px-7 py-3.5 text-lg gap-2.5",
    };

    const isAnchor = Component === "a";
    const componentProps = isAnchor ? { ...props, href: (props as AnchorHTMLAttributes<HTMLAnchorElement>).href } : props;

    // Use a generic ref type that works for both button and anchor
    const refType = ref as Ref<HTMLButtonElement | HTMLAnchorElement>;

    return (
      <Component
        ref={refType}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={!isAnchor && (disabled || loading)}
        aria-disabled={isAnchor && (disabled || loading)}
        tabIndex={isAnchor && (disabled || loading) ? -1 : undefined}
        {...componentProps}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";