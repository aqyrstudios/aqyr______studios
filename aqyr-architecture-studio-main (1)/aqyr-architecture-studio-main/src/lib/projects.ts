export type ProjectCategory = "Homes" | "Commercial" | "Public";

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: number;
  category: ProjectCategory;
  summary: string;
};

export const projectCategories: ProjectCategory[] = ["Homes", "Commercial", "Public"];

export const projects: Project[] = [
  {
    slug: "hillside-house",
    title: "Hillside House",
    location: "Somerset, UK",
    year: 2025,
    category: "Homes",
    summary: "A low concrete and timber home set into a south-facing slope.",
  },
  {
    slug: "foundry-yard-offices",
    title: "Foundry Yard Offices",
    location: "London, UK",
    year: 2025,
    category: "Commercial",
    summary: "Six storeys of flexible workspace behind a deep precast facade.",
  },
  {
    slug: "northgate-library",
    title: "Northgate Library",
    location: "Leeds, UK",
    year: 2024,
    category: "Public",
    summary: "A civic library and community hall opening onto a new public square.",
  },
  {
    slug: "brick-lane-townhouse",
    title: "Brick Lane Townhouse",
    location: "London, UK",
    year: 2024,
    category: "Homes",
    summary: "A narrow infill house with deep brick window reveals.",
  },
  {
    slug: "harbour-market-hall",
    title: "Harbour Market Hall",
    location: "Bristol, UK",
    year: 2023,
    category: "Commercial",
    summary: "The conversion of a dockside warehouse into a food market and cafés.",
  },
  {
    slug: "pine-cabin",
    title: "Pine Cabin",
    location: "Cairngorms, UK",
    year: 2023,
    category: "Homes",
    summary: "A dark timber retreat with one large window to the forest.",
  },
  {
    slug: "riverside-primary-school",
    title: "Riverside Primary School",
    location: "Oxford, UK",
    year: 2022,
    category: "Public",
    summary: "Daylit classrooms arranged around a shared courtyard garden.",
  },
  {
    slug: "stone-barn-studio",
    title: "Stone Barn Studio",
    location: "Cotswolds, UK",
    year: 2022,
    category: "Commercial",
    summary: "A restored stone barn reworked as a design studio and showroom.",
  },
];

export function filterProjects(list: Project[], category: ProjectCategory | "All"): Project[] {
  return category === "All" ? list : list.filter((p) => p.category === category);
}
