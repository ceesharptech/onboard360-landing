import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "accent" | "subtle";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
}

const badgeVariants = {
  neutral: "bg-surface-elevated text-text-secondary border-border-regular hover:border-border-strong",
  accent: "bg-accent-subtle text-text-primary border-border-accent/40",
  subtle: "bg-surface/80 text-text-muted border-border-subtle",
};

const badgeSizes = {
  sm: "text-[11px] py-0.5 px-2 gap-1.5",
  md: "text-xs py-1 px-2.5 gap-2",
};

export function Badge({
  className,
  variant = "neutral",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono border font-medium select-none tracking-tight",
        "transition-colors duration-150",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variant === "accent" ? "bg-accent" : "bg-text-muted"
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
