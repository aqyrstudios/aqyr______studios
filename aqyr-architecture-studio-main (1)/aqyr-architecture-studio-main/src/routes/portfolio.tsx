import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ComingSoonImage } from "@/components/site/ComingSoonImage";
import { cn } from "@/lib/utils";
import { filterProjects, projectCategories, projects, type ProjectCategory } from "@/lib/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — aqyr studios" },
      {
        name: "description",
        content: "Selected homes, commercial buildings and public projects by aqyr studios.",
      },
      { property: "og:title", content: "Portfolio — aqyr studios" },
      {
        property: "og:description",
        content: "Selected homes, commercial buildings and public projects by aqyr studios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const filters: (ProjectCategory | "All")[] = ["All", ...projectCategories];

function PortfolioPage() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const shown = filterProjects(projects, active);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:px-10 lg:py-24">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-3 max-w-4xl text-[2.75rem] font-bold leading-[0.95] sm:text-6xl lg:text-7xl">
        Homes, workplaces &amp; public buildings.
      </h1>

      <div
        className="mt-8 flex flex-wrap gap-2 lg:mt-10"
        role="tablist"
        aria-label="Filter projects"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-5 py-2 font-display text-sm font-medium transition-colors",
              active === f
                ? "border-ink bg-ink text-ink-foreground"
                : "border-border hover:border-ink",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
        {shown.map((p, i) => (
          <article key={p.slug} className="animate-rise" style={{ animationDelay: `${i * 60}ms` }}>
            <ComingSoonImage label={p.title} className="aspect-[4/3] rounded-lg lg:aspect-[4/5]" />
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h2 className="min-w-0 text-xl font-semibold sm:text-2xl">{p.title}</h2>
              <span className="shrink-0 text-sm text-muted-foreground">{p.year}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">{p.category}</p>
            <p className="mt-2 text-muted-foreground">{p.summary}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
