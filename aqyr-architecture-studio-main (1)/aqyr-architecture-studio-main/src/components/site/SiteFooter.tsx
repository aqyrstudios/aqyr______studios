import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-12 lg:py-16">
        <div>
          <p className="font-display text-3xl font-bold tracking-tight">
            aqyr studios<span className="text-primary">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Architecture for homes, workplaces and public life.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Visit</p>
          <p className="mt-3 leading-relaxed">
            14 Foundry Lane
            <br />
            London E2 8DP
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Contact</p>
          <a
            href="mailto:hello@aqyrstudios.com"
            className="mt-3 block hover:text-primary break-all"
          >
            hello@aqyrstudios.com
          </a>
          <a href="tel:+442070000000" className="mt-1 block hover:text-primary">
            +44 20 7000 0000
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground md:px-10">
          <span>© {new Date().getFullYear()} aqyr studios</span>
          <nav className="flex gap-6">
            <Link to="/portfolio" className="hover:text-primary">
              Portfolio
            </Link>
            <Link to="/who-we-are" className="hover:text-primary">
              Who we are
            </Link>
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
