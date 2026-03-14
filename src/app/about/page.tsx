import type { Metadata } from "next";
import {
  MapPin,
  Target,
  Leaf,
  Shield,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Lower Withlacoochee River Keeper — our mission, values, geographic focus, and commitment to hands-on estuary stewardship on Florida's Nature Coast.",
};

const standForPoints = [
  {
    icon: Target,
    title: "Estuary protection through measurable, hands-on action",
    text: "Every program produces trackable results — tons of debris removed, water quality data collected, habitat acres restored. We don't just advocate; we act, measure, and report.",
  },
  {
    icon: Leaf,
    title: "Practical stewardship that produces real environmental results",
    text: "Our model is built on fieldwork, not symbolism. We design programs that directly improve ecological conditions in the Lower Withlacoochee estuary system.",
  },
  {
    icon: Users,
    title:
      "Inclusive participation for veterans, people with disabilities, and all communities",
    text: "Environmental stewardship is for everyone. We create adaptive programs, accessible staging areas, and welcoming events so that people of all abilities can contribute.",
  },
  {
    icon: Shield,
    title: "Long-Term Conservation to Estuary",
    text: "By integrating controlled sites like Tide Over Island alongside public venues like Withlacoochee Gulf Preserve, we ensure operational continuity and long-term environmental protection.",
  },
];

const boardMembers = [
  {
    name: "Kenneth Raulerson",
    role: "CEO",
  },
  {
    name: "Carl Zervis",
    role: "PRESIDENT",
  },
  {
    name: "Laurence Neace",
    role: "SECRETARY",
  },
  {
    name: "Carla Chaffin",
    role: "Treasurer",
  },
  {
    name: "Justin Raulerson",
    role: "Operations Director",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">About Us</h1>
          <p className="mt-4 text-lg text-white/80">
            Hands-on estuary stewardship on Florida&apos;s Nature Coast
          </p>
        </div>
      </section>

      {/* Full Mission Statement */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Our Mission
          </h2>
          <div className="h-1 w-16 rounded-full bg-accent mb-8" aria-hidden="true" />
          <p className="text-base leading-relaxed text-muted">
            Our mission is to protect, restore, and steward the Lower
            Withlacoochee River and surrounding estuarine systems through
            hands-on environmental action, habitat restoration, water quality
            awareness, and inclusive community participation. We are committed
            to building a practical, measurable stewardship model that improves
            ecological health, reduces marine debris, supports shoreline
            resilience, protects wildlife habitat, and creates meaningful access
            to nature for the public, including veterans and people with
            disabilities.
          </p>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Board Members
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent mb-12" aria-hidden="true" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-slate-200 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-stone-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            What We Stand For
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent mb-12" aria-hidden="true" />
          <div className="space-y-8">
            {standForPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="shrink-0 rounded-lg bg-emerald-50 p-3 h-fit">
                    <Icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-lg bg-emerald-50 p-3">
              <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Geographic Focus
            </h2>
          </div>
          <div className="h-1 w-16 rounded-full bg-accent mb-8" aria-hidden="true" />
          <p className="text-base leading-relaxed text-muted mb-6">
            Our work is concentrated in the Lower Withlacoochee River and its
            surrounding estuarine systems on Florida&apos;s Nature Coast,
            primarily within Levy County. This region represents one of the
            least developed and most ecologically significant coastal zones in
            Florida — home to expansive salt marshes, seagrass meadows, oyster
            reefs, tidal creeks, and a rich diversity of fish, birds, and
            marine life.
          </p>
          <p className="text-base leading-relaxed text-muted mb-8">
            We operate through a two-hub model that maximizes both public
            engagement and operational capacity:
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Withlacoochee Gulf Preserve
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Our public-facing program and education hub. Features accessible
                boardwalks, an observation tower, and direct estuary access —
                ideal for volunteer events, educational programs, and inclusive
                community stewardship.
              </p>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Tide Over Island
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Our controlled logistics, staging, and restoration base.
                Strategically positioned to support debris removal operations,
                habitat restoration fieldwork, and long-term conservation
                research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why It Matters
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent mb-8" aria-hidden="true" />
          <p className="text-base leading-relaxed text-muted mb-4">
            Florida&apos;s coastal estuaries are under increasing pressure from
            marine debris, water quality degradation, habitat loss, and
            shoreline erosion. The Lower Withlacoochee River system — while
            still relatively intact — faces these same threats, particularly as
            development expands along the Nature Coast.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Without sustained, organized, hands-on stewardship, the ecological
            health of this system will decline. The Lower Withlacoochee River
            Keeper exists to fill that gap — not with talk, but with measurable
            field-based action that makes a real, documentable difference.
          </p>
        </div>
      </section>
    </div>
  );
}
