import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  variant?: "filled" | "outline";
  size?: "default" | "lg";
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  variant = "filled",
  size = "default",
  className,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200",
        size === "lg" ? "px-8 py-3.5 text-base" : "px-6 py-2.5 text-sm",
        variant === "filled"
          ? "bg-cta text-white hover:bg-emerald-700 shadow-sm hover:shadow-md"
          : "border-2 border-white text-white hover:bg-white/10",
        className
      )}
    >
      {children}
    </Link>
  );
}
