"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface LocationCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  index?: number;
}

export default function LocationCard({
  title,
  subtitle,
  description,
  image,
  icon: Icon,
  features,
  index = 0,
}: LocationCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="rounded-full bg-white/90 p-2">
            <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-white/80">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-4 text-sm leading-relaxed text-muted">{description}</p>
        <ul className="space-y-2" role="list">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
