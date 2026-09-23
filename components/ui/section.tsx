import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "default" | "compact" | "generous" | "none";
  divider?: boolean;
  children: React.ReactNode;
}

const spacingClasses = {
  none: "py-0",
  compact: "py-12 sm:py-16 lg:py-20",
  default: "py-20 sm:py-28 lg:py-32",
  generous: "py-28 sm:py-36 lg:py-44",
};

export function Section({
  className,
  spacing = "default",
  divider = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        divider && "border-t border-border-subtle",
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
