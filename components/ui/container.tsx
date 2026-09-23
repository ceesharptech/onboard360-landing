import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
  children: React.ReactNode;
}

const sizeClasses = {
  narrow: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("w-full mx-auto px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
