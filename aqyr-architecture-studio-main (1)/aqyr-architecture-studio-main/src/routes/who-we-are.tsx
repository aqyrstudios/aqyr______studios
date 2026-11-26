import { createFileRoute } from "@tanstack/react-router";

import { ComingSoonImage } from "@/components/site/ComingSoonImage";

export const Route = createFileRoute("/who-we-are")({
  head: () => ({
    meta: [
      { title: "Who we are — aqyr studios" },
      {
        name: "description",
        content:
          "Meet aqyr studios: an architecture office built on listening, drawing and building with care.",
      },
      { property: "og:title", content: "Who we are — aqyr studios" },
      {
        property: "og:description",
        content: "An architecture office built on listening, drawing and building with care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhoWeArePage,
});

const values = [
  {
    title: "Listen first",
    text: "Every project starts with understanding how people want to live, work and gather.",
  },
  {
    title: "Honest materials",
    text: "Stone, timber, brick and concrete — chosen to age well and suit the place.",
  },
  {
    title: "Light & proportion",
    text: "We shape rooms around daylight, views and the way a space feels to move through.",
  },
  {
    title: "Built to last",
    text: "Low-energy, durable buildings that are simple to maintain for decades.",
  },
];

const team = [
  { name: "Amara Quinn", role: "Founding Director, Architect" },
  { name: "Yusuf Rahman", role: "Director, Architect" },
  { name: "Lena Ortiz", role: "Associate, Interiors" },
  { name: "Theo Marsh", role: "Project Architect" },
];

function WhoWeArePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:px-10 lg:py-24">
        <p className="eyebrow">Who we are</p>
        <div className="mt-3 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <h1 className="max-w-3xl text-[2.75rem] font-bold leading-[0.95] sm:text-6xl lg:col-span-7 lg:text-7xl">
            A small studio with a <span className="text-primary">big drawing table.</span>
          </h1>
          <div className="max-w-2xl space-y-5 text-base text-muted-foreground sm:text-lg lg:col-span-5 lg:pt-4">
            <p>
              aqyr studios was founded to make thoughtful architecture at every scale — from a
              single family home to a building used by a whole neighbourhood.
            </p>
            <p>
              We work closely with clients, builders and specialists, keeping the team small so the
              people who draw your project are the ones who see it built.
            </p>
          </div>
        </div>
        <ComingSoonImage
          size="lg"
          label="The studio"
          className="mt-10 aspect-[4/3] w-full rounded-lg sm:aspect-[16/9] lg:mt-14 lg:aspect-[21/9]"
        />
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:px-10 lg:py-24">
          <p className="eyebrow">What we believe</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:mt-10 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.title} className="border-t-2 border-ink pt-6">
                <span className="font-display text-sm font-semibold text-primary">0{i + 1}</span>
                <h2 className="mt-2 text-2xl font-semibold">{v.title}</h2>
                <p className="mt-3 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:px-10 lg:py-24">
          <p className="eyebrow">The team</p>
          <h2 className="mt-3 text-4xl font-bold lg:text-5xl">The people behind the drawings</h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:mt-12 lg:grid-cols-4 lg:gap-8">
            {team.map((m) => (
              <div key={m.name}>
                <ComingSoonImage label={m.name} className="aspect-square rounded-lg" />
                <h3 className="mt-3 text-lg font-semibold sm:mt-4 sm:text-xl">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
