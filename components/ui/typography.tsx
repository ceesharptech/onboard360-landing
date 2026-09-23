import * as React from "react";
import { cn } from "@/lib/utils";

export interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.14em] text-text-muted mb-3 sm:mb-4 select-none",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export function SectionHeading({
  as: Tag = "h2",
  className,
  children,
  ...props
}: SectionHeadingProps) {
  const headingStyles = {
    h1: "text-4xl sm:text-5xl lg:text-6xl tracking-[-0.035em] leading-[1.05] font-medium text-text-primary",
    h2: "text-2xl sm:text-3xl lg:text-4xl tracking-[-0.025em] leading-[1.15] font-medium text-text-primary",
    h3: "text-xl sm:text-2xl tracking-[-0.02em] leading-[1.25] font-medium text-text-primary",
  };

  return (
    <Tag className={cn(headingStyles[Tag], className)} {...props}>
      {children}
    </Tag>
  );
}

export interface SectionSubheadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function SectionSubheading({
  className,
  children,
  ...props
}: SectionSubheadingProps) {
  return (
    <p
      className={cn(
        "text-base sm:text-lg text-text-muted leading-relaxed max-w-[65ch] mt-3 sm:mt-4",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export interface BodyTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "base";
  children: React.ReactNode;
}

export function BodyText({
  className,
  size = "base",
  children,
  ...props
}: BodyTextProps) {
  return (
    <p
      className={cn(
        size === "sm" ? "text-sm text-text-muted leading-normal" : "text-base text-text-muted leading-relaxed max-w-[65ch]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
