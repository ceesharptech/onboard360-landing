import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-white font-medium border border-white/15 hover:bg-accent-hover hover:border-white/25 active:scale-[0.98] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_10px_rgba(94,106,210,0.25)]",
  secondary:
    "bg-surface-elevated text-text-primary border border-border-regular hover:bg-surface-active hover:border-border-strong hover:text-white active:scale-[0.98] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
  ghost:
    "bg-transparent text-text-muted hover:text-text-primary hover:bg-surface active:scale-[0.98] border border-transparent",
  outline:
    "bg-transparent text-text-secondary border border-border-regular hover:border-border-strong hover:text-text-primary hover:bg-surface/50 active:scale-[0.98]",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs rounded-md gap-1.5",
  md: "h-10 px-4 text-sm rounded-lg gap-2",
  lg: "h-11 px-5 text-sm sm:text-base rounded-lg gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center whitespace-nowrap select-none font-medium outline-none",
      "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
      "transition-all duration-150 ease-out cursor-pointer",
      variantStyles[variant],
      sizeStyles[size],
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    );

    if (href) {
      const isAnchorExternal = isExternal || href.startsWith("http") || href.startsWith("mailto:");

      if (isAnchorExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={baseClasses}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={props.type || "button"}
        disabled={disabled}
        className={baseClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
