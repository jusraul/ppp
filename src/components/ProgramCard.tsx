"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export default function ProgramCard({
  icon: Icon,
  title,
  description,
  href = "/programs",
  index = 0,
}: ProgramCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
        <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-3 text-primary group-hover:bg-emerald-100 transition-colors">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
        >
          Learn More
          <span className="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
