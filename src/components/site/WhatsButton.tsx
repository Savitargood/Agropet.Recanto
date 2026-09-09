import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/site";

type Props = {
  message: string;
  children: ReactNode;
  className?: string;
  variant?: "green" | "gold" | "outline";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
};

const variants = {
  green: "bg-gradient-green text-primary-foreground shadow-soft hover:brightness-105",
  gold: "bg-gradient-gold text-accent-foreground shadow-soft hover:brightness-105",
  outline: "border-2 border-primary/25 bg-card text-primary hover:bg-primary/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function WhatsButton({
  message,
  children,
  className,
  variant = "green",
  size = "md",
  glow = false,
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
        variants[variant],
        sizes[size],
        glow && "animate-pulse-glow",
        className,
      )}
    >
      {children}
    </a>
  );
}
