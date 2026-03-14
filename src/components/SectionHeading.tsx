"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  children,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-muted mx-auto">{subtitle}</p>
      )}
      {children}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
        aria-hidden="true"
      />
    </motion.div>
  );
}
