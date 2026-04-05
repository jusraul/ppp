"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Trash2,
  Droplets,
  TreePine,
  BookOpen,
  Heart,
  Shield,
  Recycle,
  Clock,
  Users,
  Accessibility,
  Building,
  Anchor,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProgramCard from "@/components/ProgramCard";
import LocationCard from "@/components/LocationCard";
import ImpactStat from "@/components/ImpactStat";
import PrimaryButton from "@/components/PrimaryButton";

const programs = [
  {
    icon: Trash2,
    title: "Marine Debris Removal & Shoreline Cleanup",
    description:
      "Organizing measurable community cleanups to remove debris from shorelines, mangroves, and waterways. We track tonnage removed, volunteer hours, and site conditions to build credible impact data.",
    href: "/programs#debris",
  },
  {
    icon: Droplets,
    title: "Water Quality Awareness & Monitoring",
    description:
      "Building public awareness around dissolved oxygen, salinity, turbidity, and nutrient levels in the estuary. We support community-based monitoring to establish baseline data for long-term stewardship.",
    href: "/programs#water-quality",
  },
  {
    icon: TreePine,
    title: "Habitat Restoration & Shoreline Resilience",
    description:
      "Supporting oyster reef restoration, living shorelines, and native vegetation projects that strengthen natural coastal defenses and restore critical estuarine habitat for fish, birds, and wildlife.",
    href: "/programs#habitat",
  },
  {
    icon: BookOpen,
    title: "Environmental Education & Public Awareness",
    description:
      "Hosting field days, guided nature walks, and educational workshops at Withlacoochee Gulf Preserve to connect the public with the river and estuary through direct experience and hands-on learning.",
    href: "/programs#education",
  },
  {
    icon: Heart,
    title: "Inclusive Participation & Adaptive Stewardship",
    description:
      "Creating meaningful, accessible stewardship opportunities for veterans, people with disabilities, and underserved communities. We design adaptive programs that ensure environmental action is open to everyone.",
    href: "/programs#inclusive",
  },
  {
    icon: Shield,
    title: "Long-Term Conservation to Estuary",
    description:
      "Integrating strategically located sites like Tide Over Island as controlled logistics and restoration bases, ensuring long-term operational capacity and environmental protection beyond public land boundaries.",
    href: "/programs#conservation",
  },
];

const impactStats = [
  { icon: Recycle, value: "3+ tons", label: "Debris Removed" },
  { icon: Clock, value: "250+ hours", label: "Volunteer Hours" },
  { icon: Users, value: "4+ cleanups", label: "Cleanups Hosted" },
  {
    icon: Accessibility,
    value: "5+ events",
    label: "Events",
  },
];

function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ——— HERO ——— */}
      <section className="relative min-h-[90vh] pt-24 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
          alt="Coastal estuary along Florida's Nature Coast"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Lower Withlacoochee
            <br />
            River Keeper
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-xl font-medium text-white/90 sm:text-2xl"
          >
            Turning concern into measurable field operations
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base"
          >
            Our nonprofit exists to protect and restore the Lower
            Withlacoochee River and surrounding estuarine systems through
            measurable field-based action. We organize community cleanups,
            support habitat restoration and shoreline resilience efforts,
            build environmental awareness through public education and
            monitoring, and create inclusive stewardship opportunities for
            the public, including veterans and people with disabilities.
            Operating primarily from the Withlacoochee Gulf Preserve and
            strategically integrating nearby controlled sites such as Tide
            Over Island, we are building a portable, scalable coastal
            stewardship model for Florida&apos;s Nature Coast that combines
            environmental impact, public benefit, and long-term conservation
            strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <PrimaryButton href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Join%20a%20Cleanup" size="lg">
              Join a Cleanup
            </PrimaryButton>
            <PrimaryButton href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Learn%20More" variant="outline" size="lg">
              Learn More
            </PrimaryButton>
          </motion.div>
        </div>
      </section>

      {/* ——— 2028 BALLOT ——— */}
      <section className="relative py-16 bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-block rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-300 mb-4">
            2028 Ballot Initiative
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Fighting to Preserve the Nature Coast — Forever
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80 mb-8">
            We&apos;re working to place permanent conservation protections for
            Florida&apos;s Nature Coast on the 2028 ballot. Our estuaries,
            rivers, and shorelines deserve lasting safeguards — and your
            voice makes it possible.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <PrimaryButton href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Get%20Involved" size="lg">
              Get Involved
            </PrimaryButton>
            <PrimaryButton href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Learn%20More" variant="outline" size="lg">
              Learn More
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* ——— QUICK ABOUT ——— */}
      <FadeInSection className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Who We Are"
            subtitle="A 501(c)(3) estuary stewardship nonprofit on Florida's Nature Coast"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-muted">
              The Lower Withlacoochee River Keeper is a nonprofit organization
              dedicated to protecting and restoring one of Florida&apos;s most
              ecologically significant coastal river systems. We operate where
              the Lower Withlacoochee River meets the Gulf of Mexico — a
              critical zone of tidal exchange, seagrass beds, oyster bars, and
              coastal marshland that supports diverse wildlife and resilient
              shorelines.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our work is not theoretical. We are in the field removing debris,
              monitoring conditions, restoring habitat, and connecting people
              with the river and estuary. Every program we run is designed to
              produce measurable outcomes and build long-term conservation
              capacity.
            </p>
          </div>

          <div className="mt-12 rounded-xl bg-emerald-50 p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-slate-900">
              What We Stand For
            </h3>
            <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:gap-6" role="list">
              {[
                "Estuary protection through measurable, hands-on action",
                "Practical stewardship that produces real environmental results",
                "Inclusive participation for veterans, people with disabilities, and all communities",
                "Long-Term Conservation to Estuary",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>

      {/* ——— PROGRAMS ——— */}
      <FadeInSection className="py-20 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Programs"
            subtitle="Six focused lanes of environmental stewardship — each producing measurable impact"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <ProgramCard key={program.title} {...program} index={i} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ——— OUR HUBS ——— */}
      <FadeInSection className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Hubs"
            subtitle="Two strategic locations powering our conservation mission"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <LocationCard
              title="Withlacoochee Gulf Preserve"
              subtitle="Public Program & Education Hub"
              description="Our primary public-facing hub for education, volunteer events, and community engagement. The Preserve offers accessible boardwalks, an observation tower, and a direct connection to the river and estuary — making it an ideal platform for environmental education and inclusive stewardship."
              image="/images/wgp.jpg"
              icon={Building}
              features={[
                "Accessible boardwalk and observation tower",
                "Public education and volunteer staging area",
                "Direct estuary and river access",
                "ADA-friendly facilities for inclusive programs",
              ]}
              index={0}
            />
            <LocationCard
              title="Tide Over Island"
              subtitle="Logistics & Restoration Base"
              description="A strategically located controlled site used for logistics support, restoration operations, and long-term field research. Tide Over Island extends our operational reach beyond public land, providing staging capacity for debris removal, habitat restoration, and adaptive stewardship programs."
              image="/images/tide-over-island.jpg"
              icon={Anchor}
              features={[
                "Controlled logistics and staging operations",
                "Habitat restoration field site",
                "Strategic location for estuary access",
                "Long-term conservation and research capacity",
              ]}
              index={1}
            />
          </div>
        </div>
      </FadeInSection>

      {/* ——— IMPACT STATS ——— */}
      <FadeInSection className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Impact"
            subtitle="Measurable results from field-based conservation"
          />
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <ImpactStat key={stat.label} {...stat} index={i} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ——— FINAL CTA ——— */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to protect the estuary?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Get involved today. Whether you can volunteer, donate, or spread
            the word — every action helps protect Florida&apos;s Nature Coast.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <PrimaryButton href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Get%20Involved" size="lg">
              Get Involved
            </PrimaryButton>
            <PrimaryButton href="mailto:lowerwithlacoocheeriverkeeper@gmail.com?subject=Contact%20Us" variant="outline" size="lg">
              Contact Us
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}
