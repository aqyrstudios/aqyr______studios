import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — aqyr studios" },
      {
        name: "description",
        content:
          "Architecture, interiors, extensions, planning and project management for homes, businesses and public clients.",
      },
      { property: "og:title", content: "Services — aqyr studios" },
      {
        property: "og:description",
        content: "From feasibility and planning to interiors and site delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Architecture",
    text: "New homes, offices, shops and public buildings, designed from concept to construction drawings.",
  },
  {
    title: "Extensions & renovation",
    text: "Sensitive additions, conversions and refurbishments that give existing buildings a new life.",
  },
  {
    title: "Interior design",
    text: "Layouts, joinery, lighting and finishes that carry the architecture through to the details.",
  },
  {
    title: "Feasibility & masterplanning",
    text: "Site studies, massing and options to show what's possible before you commit.",
  },
  {
    title: "Planning applications",
    text: "Drawings, statements and negotiation with the council to secure planning permission.",
  },
  {
    title: "Project management",
    text: "Tendering, contracts and site visits to keep the build on programme and on budget.",
  },
];

const steps = [
  { title: "Meet", text: "A first conversation about your site, brief and budget." },
  { title: "Design", text: "Sketches, models and drawings, refined together with you." },
  { title: "Approve", text: "Planning, building regulations and detailed technical design." },
  { title: "Build", text: "We stay on site with your builder until the keys are handed over." },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:px-10 lg:py-24">
        <p className="eyebrow">Services</p>
        <h1 className="mt-3 max-w-4xl text-[2.75rem] font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
          Everything from first idea to <span className="text-primary">finished building.</span>
        </h1>

        <div className="mt-10 divide-y lg:mt-16 divide-border border-y border-border">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-4 md:py-8"
            >
              <span className="font-display text-sm font-semibold text-primary md:col-span-1">
                0{i + 1}
              </span>
              <h2 className="text-2xl font-semibold md:col-span-5 lg:text-3xl">{s.title}</h2>
              <p className="text-muted-foreground md:col-span-6">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:px-10 lg:py-24">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 text-4xl font-bold lg:text-5xl">Four simple stages</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:mt-12 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 md:px-10 lg:py-24">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold lg:text-5xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Send us a few lines about your project and we'll suggest the right starting point.
          </p>
          <a href="mailto:hello@aqyrstudios.com" className="btn-brand mt-8">
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
