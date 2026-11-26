import { describe, expect, it } from "vitest";

import { filterProjects, projects } from "@/lib/projects";

describe("portfolio filter", () => {
  it("shows every project under All", () => {
    expect(filterProjects(projects, "All")).toHaveLength(projects.length);
  });

  it("shows only public projects under Public", () => {
    const shown = filterProjects(projects, "Public");
    expect(shown.length).toBeGreaterThan(0);
    expect(shown.every((p) => p.category === "Public")).toBe(true);
  });

  it("includes homes, commercial and public work", () => {
    const cats = new Set(projects.map((p) => p.category));
    expect([...cats].sort()).toEqual(["Commercial", "Homes", "Public"]);
  });
});
