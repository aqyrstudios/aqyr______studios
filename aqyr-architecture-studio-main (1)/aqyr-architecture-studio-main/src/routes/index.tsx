import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroAsset from "@/assets/hero-house.jpg.asset.json";
import { ComingSoonImage } from "@/components/site/ComingSoonImage";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "aqyr studios — Architecture for homes, workplaces and public life" },
      {
        name: "description",
        content:
          "aqyr studios is an architecture office designing homes, offices and public buildings with care for light, material and place.",
      },
      { property: "og:title", content: "aqyr studios — Architecture" },
      {
        property: "og:description",
        content:
          "Homes, workplaces and public buildings designed with care for light, material and place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero — the project photo fills the screen under the nav bar, text laid over it */}
      <section className="relative flex min-h-[calc(100dvh-5rem)] items-end overflow-hidden">
        <img
          src={heroAsset.url}
          alt="A house with an orange roof and dark walls, seen across a lawn between two trees"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-10 sm:pb-16 md:px-10 lg:pb-24">
          <h1 className="hero-title animate-rise font-display text-[2rem] font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Hillhouse, Lochinver
          </h1>
          <Link to="/portfolio" className="btn-brand animate-rise mt-5" style={{ animationDelay: "120ms" }}>
            Find out more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:px-10 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <p className="eyebrow lg:col-span-3">The studio</p>
          <div className="lg:col-span-9">
            <p className="font-display text-2xl font-medium leading-snug sm:text-3xl lg:text-4xl">
              We're a small team of architects and designers. We listen closely, draw a lot, and
              build carefully — whether it's a family home, an office, or a library for a whole
              town.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/who-we-are" className="btn-line">
                Who we are
              </Link>
              <Link to="/services" className="btn-line">
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 md:px-10 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 text-4xl font-bold lg:text-5xl">Recent projects</h2>
            </div>
            <Link to="/portfolio" className="nav-link inline-flex items-center gap-2">
              Full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            {featured.map((p, i) => (
              <article key={p.slug} className={i === 3 ? "lg:hidden" : undefined}>
                <ComingSoonImage label={p.title} className="aspect-[4/3] rounded-lg lg:aspect-[4/5]" />
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="min-w-0 text-xl font-semibold">{p.title}</h3>
                  <span className="shrink-0 text-sm text-muted-foreground">{p.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {p.category} · {p.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 md:px-10 lg:py-28">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tell us about your site, your ideas and your budget. We'll get back to you within two
            working days.
          </p>
          <a href="mailto:hello@aqyrstudios.com" className="btn-brand mt-8">
            Start a conversation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
