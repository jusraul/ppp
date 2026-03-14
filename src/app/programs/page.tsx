import type { Metadata } from "next";
import {
  Trash2,
  Droplets,
  TreePine,
  BookOpen,
  Heart,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore six focused lanes of environmental stewardship — from marine debris removal and water quality monitoring to habitat restoration and inclusive participation.",
};

const programs = [
  {
    id: "debris",
    icon: Trash2,
    title: "Marine Debris Removal & Shoreline Cleanup",
    description:
      "Marine debris — plastics, fishing line, abandoned traps, and storm-deposited waste — degrades habitat, harms wildlife, and signals neglect. Our shoreline cleanup program organizes regular, measurable community events that remove debris from riverbanks, mangrove edges, oyster bars, and near-shore waters throughout the Lower Withlacoochee estuary system.",
    details: [
      "Scheduled community cleanup events at Withlacoochee Gulf Preserve and surrounding shorelines",
      "Tonnage tracking and GPS-tagged removal data for every event",
      "Volunteer hour logging for grant compliance and impact reporting",
      "Partnership with county waste management for responsible disposal",
      "Post-event site assessments to track improvement over time",
    ],
  },
  {
    id: "water-quality",
    icon: Droplets,
    title: "Water Quality Awareness & Monitoring",
    description:
      "Healthy estuaries depend on balanced water chemistry. We are building public awareness around the water quality conditions that define the Lower Withlacoochee estuary — dissolved oxygen, salinity, pH, turbidity, and nutrient loading. Our monitoring efforts aim to establish baseline data that supports informed conservation decisions.",
    details: [
      "Community-based water quality sampling at key estuary access points",
      "Monitoring dissolved oxygen, salinity, pH, turbidity, and temperature",
      "Educational workshops on interpreting water quality indicators",
      "Baseline data collection for long-term environmental trend analysis",
      "Coordination with state environmental agencies on data sharing",
    ],
  },
  {
    id: "habitat",
    icon: TreePine,
    title: "Habitat Restoration & Shoreline Resilience",
    description:
      "The Lower Withlacoochee estuary supports oyster reefs, seagrass beds, salt marshes, and mangrove forests — all of which are under pressure from erosion, debris, and water quality changes. Our habitat restoration programs support living shoreline projects, oyster reef construction, and native vegetation plantings that strengthen natural coastal defenses.",
    details: [
      "Oyster reef mat deployment and monitoring",
      "Living shoreline planting with native vegetation species",
      "Mangrove and salt marsh edge stabilization projects",
      "Seagrass bed survey and condition documentation",
      "Collaboration with restoration partners and marine scientists",
    ],
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Environmental Education & Public Awareness",
    description:
      "Environmental stewardship begins with understanding. We host field days, guided nature walks, educational workshops, and public awareness campaigns at Withlacoochee Gulf Preserve that connect residents and visitors with the ecology of the Lower Withlacoochee River and surrounding coastline.",
    details: [
      "Guided nature walks along the Preserve's accessible boardwalk system",
      "Estuary ecology workshops for school groups and community organizations",
      "Public field days combining cleanup activities with educational programming",
      "Interpretive signage development highlighting estuarine species and habitats",
      "Outreach partnerships with schools, libraries, and nature centers",
    ],
  },
  {
    id: "inclusive",
    icon: Heart,
    title: "Inclusive Participation & Adaptive Stewardship",
    description:
      "Stewardship should be accessible to everyone. We design adaptive programs that create meaningful environmental participation opportunities for veterans, people with disabilities, seniors, and underserved communities. From ADA-accessible staging areas to modified cleanup protocols, our inclusive approach ensures that environmental action is open to all.",
    details: [
      "ADA-accessible volunteer staging at Withlacoochee Gulf Preserve",
      "Adaptive cleanup and restoration tasks designed for varying abilities",
      "Veteran-focused outdoor stewardship experiences",
      "Transportation and equipment support for participants with mobility challenges",
    ],
  },
  {
    id: "conservation",
    icon: Shield,
    title: "Long-Term Conservation to Estuary",
    description:
      "Effective long-term conservation requires more than public land access — it requires strategic operational capacity. By integrating controlled sites like Tide Over Island as logistics, staging, and restoration bases, we extend our reach beyond public land limitations and ensure continuous environmental operations regardless of seasonal or access constraints.",
    details: [
      "Strategic integration of Tide Over Island as a controlled field operations base",
      "Staging capacity for debris removal, restoration materials, and field equipment",
      "Long-term site monitoring and ecological condition documentation",
      "Coordination between public (WGP) and private (Tide Over) operational sites",
      "Building a replicable two-hub stewardship model for other coastal nonprofits",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Programs</h1>
          <p className="mt-4 text-lg text-white/80">
            Six focused lanes of environmental stewardship — each built for
            measurable impact
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <article
                  key={program.id}
                  id={program.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={`flex flex-col gap-8 lg:flex-row ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="lg:w-1/3 flex justify-center lg:justify-start">
                      <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-8 flex items-center justify-center w-40 h-40">
                        <Icon
                          className="h-16 w-16 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        {program.title}
                      </h2>
                      <div className="h-1 w-12 rounded-full bg-accent mb-4" aria-hidden="true" />
                      <p className="text-base leading-relaxed text-muted mb-6">
                        {program.description}
                      </p>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                        Key Activities
                      </h3>
                      <ul className="space-y-2" role="list">
                        {program.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm text-slate-700"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < programs.length - 1 && (
                    <hr className="mt-16 border-slate-200" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
