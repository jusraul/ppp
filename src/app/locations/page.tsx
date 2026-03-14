import type { Metadata } from "next";
import Image from "next/image";
import {
  Building,
  Anchor,
  Accessibility,
  Eye,
  Compass,
  TreePine,
  Ship,
  FlaskConical,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Our two-hub conservation model: Withlacoochee Gulf Preserve for public programs and education, and Tide Over Island for logistics, staging, and habitat restoration.",
};

export default function LocationsPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Locations</h1>
          <p className="mt-4 text-lg text-white/80">
            A two-hub conservation model built for long-term impact
          </p>
        </div>
      </section>

      {/* Two-Hub Model Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-base leading-relaxed text-muted">
            The Lower Withlacoochee River Keeper operates through a two-hub
            model that pairs public accessibility with strategic operational
            capacity. This approach ensures we can deliver community-facing
            programs while maintaining the logistics and restoration operations
            that produce lasting environmental results.
          </p>
        </div>
      </section>

      {/* WGP Section */}
      <section className="py-20 bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/wgp.jpg"
                alt="Aerial view of the Withlacoochee Gulf Preserve boardwalk and estuary"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-emerald-50 p-3">
                  <Building
                    className="h-6 w-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Withlacoochee Gulf Preserve
                  </h2>
                  <p className="text-sm font-medium text-accent">
                    Public Program & Education Hub
                  </p>
                </div>
              </div>
              <div className="h-1 w-12 rounded-full bg-accent mb-6" aria-hidden="true" />
              <p className="text-base leading-relaxed text-muted mb-6">
                The Withlacoochee Gulf Preserve (WGP) is our primary public
                hub — the place where community meets conservation. Located in
                Yankeetown, FL, the Preserve offers rare public access to
                Florida&apos;s Gulf Coast estuarine environment through
                accessible boardwalks, an observation tower, and a network
                of trails that connect directly to the Lower Withlacoochee
                River and surrounding marshland.
              </p>
              <p className="text-base leading-relaxed text-muted mb-8">
                WGP is the ideal venue for volunteer staging, educational
                programs, public field days, and inclusive stewardship events.
                Its ADA-accessible infrastructure makes it uniquely suited to
                host adaptive programs for veterans, people with disabilities,
                and all community members.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Accessibility,
                    label: "ADA-accessible boardwalk and facilities",
                  },
                  {
                    icon: Eye,
                    label: "Observation tower with estuary views",
                  },
                  {
                    icon: Compass,
                    label: "Direct river and estuary trail access",
                  },
                  {
                    icon: TreePine,
                    label: "Education and volunteer staging area",
                  },
                ].map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <div className="shrink-0 rounded bg-emerald-50 p-1.5">
                        <Icon
                          className="h-4 w-4 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tide Over Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-teal-50 p-3">
                  <Anchor
                    className="h-6 w-6 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Tide Over Island
                  </h2>
                  <p className="text-sm font-medium text-accent">
                    Logistics & Restoration Base
                  </p>
                </div>
              </div>
              <div className="h-1 w-12 rounded-full bg-accent mb-6" aria-hidden="true" />
              <p className="text-base leading-relaxed text-muted mb-6">
                Tide Over Island is a strategically located controlled site
                that serves as our logistics, staging, and restoration
                operations base. Unlike public land, Tide Over provides
                controlled access — meaning we can store equipment, stage
                restoration materials, and conduct sustained field operations
                without the constraints of public scheduling or visitor
                management.
              </p>
              <p className="text-base leading-relaxed text-muted mb-8">
                This site extends our operational reach into areas of the
                estuary that are otherwise inaccessible from public access
                points. It supports debris staging for bulk removal, habitat
                restoration material deployment, long-term monitoring
                equipment placement, and adaptive stewardship programs that
                require controlled environments.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Ship,
                    label: "Controlled logistics and staging area",
                  },
                  {
                    icon: TreePine,
                    label: "Habitat restoration field operations",
                  },
                  {
                    icon: FlaskConical,
                    label: "Long-term environmental monitoring site",
                  },
                  {
                    icon: Compass,
                    label: "Strategic estuary access point",
                  },
                ].map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <div className="shrink-0 rounded bg-teal-50 p-1.5">
                        <Icon
                          className="h-4 w-4 text-accent"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.label}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-lg order-1 lg:order-2">
              <Image
                src="/images/tide-over-island.jpg"
                alt="Coastal island shoreline used for conservation staging and restoration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Two Hubs */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why a Two-Hub Model?
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-accent mb-8" aria-hidden="true" />
          <p className="text-base leading-relaxed text-muted mb-4">
            Most coastal nonprofits operate exclusively from public access
            points — which limits their operational schedule, storage capacity,
            and ability to sustain long-term field projects. Our two-hub model
            solves this by pairing the public engagement power of Withlacoochee
            Gulf Preserve with the operational independence of Tide Over Island.
          </p>
          <p className="text-base leading-relaxed text-muted">
            This structure is designed to be portable and replicable. We are
            building a scalable coastal stewardship framework that other
            nonprofits can adapt — one that combines public benefit, measurable
            environmental impact, and long-term conservation strategy.
          </p>
        </div>
      </section>
    </div>
  );
}
