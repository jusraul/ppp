"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ImpactStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index?: number;
}

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return count;
}

export default function ImpactStat({
  icon: Icon,
  value,
  label,
  index = 0,
}: ImpactStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const numericMatch = value.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const prefix = value.substring(0, value.indexOf(numericMatch?.[0] || ""));
  const suffix = value.substring(
    value.indexOf(numericMatch?.[0] || "") + (numericMatch?.[0]?.length || 0)
  );
  const animatedCount = useCountUp(numericValue, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="mb-3 rounded-full bg-emerald-100 p-4">
        <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
      </div>
      <span className="text-3xl font-bold text-slate-900 sm:text-4xl">
        {prefix}
        {numericValue > 0 ? animatedCount.toLocaleString() : value}
        {numericValue > 0 ? suffix : ""}
      </span>
      <span className="mt-1 text-sm font-medium text-muted">{label}</span>
    </motion.div>
  );
}
