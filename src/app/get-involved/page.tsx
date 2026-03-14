import type { Metadata } from "next";
import Link from "next/link";
import {
  HandHeart,
  Users,
  Building2,
  Accessibility,
  DollarSign,
  Calendar,
} from "lucide-react";
import VolunteerForm from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, donate, or join a cleanup with the Lower Withlacoochee River Keeper. We offer inclusive stewardship opportunities for veterans, people with disabilities, and all community members.",
};

const opportunities = [
  {
    icon: HandHeart,
    title: "Join a Community Cleanup",
    description:
      "Our regular shoreline cleanups welcome volunteers of all skill levels. We provide gloves, bags, tools, and guidance — you bring the willingness to get your hands dirty for the estuary.",
  },
  {
    icon: Users,
    title: "Corporate & Group Days",
    description:
      "Bring your team, club, or organization for a structured environmental stewardship day. We handle logistics, safety briefings, and task assignments — you build team bonds while making a real difference.",
  },
  {
    icon: Building2,
    title: "Partner With Us",
    description:
      "We welcome partnerships with businesses, government agencies, educational institutions, and other nonprofits. Collaboration multiplies impact — let's talk about how to work together.",
  },
  {
    icon: Accessibility,
    title: "Inclusive & Adaptive Programs",
    description:
      "Our programs are designed to be accessible. We offer adaptive cleanup tasks, ADA-accessible staging areas at Withlacoochee Gulf Preserve, and veteran-focused outdoor stewardship experiences.",
  },
  {
    icon: Calendar,
    title: "Attend an Event",
    description:
      "From educational field days to guided nature walks, our events connect the public with the Lower Withlacoochee River and estuary. Check back for upcoming event announcements.",
  },
  {
    icon: DollarSign,
    title: "Make a Donation",
    description:
      "Every dollar supports direct field operations — debris removal, habitat restoration, water quality monitoring, and inclusive programming. Your contribution produces measurable conservation results.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Get Involved</h1>
          <p className="mt-4 text-lg text-white/80">
            Every pair of hands, every hour, every dollar makes a measurable
            difference
          </p>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-3 text-primary group-hover:bg-emerald-100 transition-colors">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Form Placeholder */}
      <section className="py-20 bg-stone-50">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            Sign Up to Volunteer
          </h2>
          <p className="text-center text-muted mb-8">
            Fill out the form below and we&apos;ll reach out about upcoming
            opportunities. You can also join the volunteer list by emailing{" "}
            <a
              href="mailto:lowerwithlacoocheeriverkeeper@gmail.com"
              className="font-medium text-accent hover:text-primary transition-colors"
            >
              lowerwithlacoocheeriverkeeper@gmail.com
            </a>
          </p>
          <div className="h-1 w-16 rounded-full bg-accent mx-auto mb-10" aria-hidden="true" />

          <VolunteerForm />
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-emerald-800 to-teal-900 text-white scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <DollarSign
            className="mx-auto h-12 w-12 text-accent-light mb-4"
            aria-hidden="true"
          />
          <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
          <p className="text-lg text-white/80 mb-8">
            Your donation directly funds field operations — debris removal,
            habitat restoration, water quality monitoring, and inclusive
            community programs. Every dollar produces measurable conservation
            results.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=AMAVN94VGL682"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary hover:bg-emerald-50 transition-colors"
            >
              Donate with PayPal
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
