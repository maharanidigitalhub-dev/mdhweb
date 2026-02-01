export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  format: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "launch-playbook",
    name: "Launch Playbook",
    tagline: "A calm, premium launch system for digital products.",
    description:
      "A guided playbook with worksheets, messaging frameworks, and timelines to launch with clarity and confidence.",
    price: "$189",
    format: "PDF + Notion templates",
    highlights: [
      "90-day launch calendar",
      "Conversion copy prompts",
      "Metrics dashboard starter"
    ]
  },
  {
    slug: "conversion-library",
    name: "Conversion Library",
    tagline: "High-performing sections for premium landing pages.",
    description:
      "A modular library of layouts, headlines, and CTA structures that map to each stage of the decision journey.",
    price: "$129",
    format: "Figma + copy bank",
    highlights: [
      "12 layout frameworks",
      "CTA and offer swipe file",
      "Accessibility checklist"
    ]
  },
  {
    slug: "automation-blueprint",
    name: "Automation Blueprint",
    tagline: "Map your operations into an elegant workflow.",
    description:
      "A step-by-step blueprint to translate your delivery into automated systems without losing personalization.",
    price: "$149",
    format: "Notion workspace",
    highlights: [
      "Workflow maps",
      "Template automations",
      "Client onboarding scripts"
    ]
  }
];
