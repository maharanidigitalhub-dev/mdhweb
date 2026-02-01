export type Product = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  priceDisplay: string;
  tags: string[];
  includes: string[];
  whoItsFor: string[];
  whoItsNotFor: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const products: Product[] = [
  {
    slug: "launch-playbook",
    title: "Launch Playbook",
    shortDescription: "A calm, premium launch system built for clarity.",
    longDescription:
      "The Launch Playbook is a guided framework that aligns offer positioning, messaging, and launch sequencing so you can ship with confidence.",
    priceDisplay: "$189",
    tags: ["Strategy", "Launch"],
    includes: [
      "90-day launch calendar",
      "Messaging framework",
      "Conversion checklist",
      "Metrics tracker"
    ],
    whoItsFor: [
      "Founders preparing a flagship launch",
      "Teams who need a structured timeline",
      "Studios building repeatable launch systems"
    ],
    whoItsNotFor: [
      "Brands seeking a one-time checklist",
      "Teams without a defined offer"
    ],
    faq: [
      {
        question: "How long is the playbook?",
        answer:
          "It is designed for a 90-day launch cycle with flexible checkpoints for shorter timelines."
      },
      {
        question: "Is it a template or a guide?",
        answer:
          "It includes both strategic guidance and practical templates."
      }
    ]
  },
  {
    slug: "conversion-library",
    title: "Conversion Library",
    shortDescription: "Editorial sections that convert without noise.",
    longDescription:
      "A modular library of premium landing page sections with copy prompts and layout guidance for every stage of the decision journey.",
    priceDisplay: "$129",
    tags: ["Design", "Conversion"],
    includes: [
      "12 layout frameworks",
      "CTA swipe file",
      "Accessibility checklist",
      "Copy hierarchy guide"
    ],
    whoItsFor: [
      "Designers building premium landing pages",
      "Founders refining conversion pages",
      "Teams who need a layout baseline"
    ],
    whoItsNotFor: [
      "Projects that need a full build",
      "Teams without design resources"
    ],
    faq: [
      {
        question: "Which tools is it for?",
        answer:
          "It is format-agnostic and includes Figma-ready layout guidance."
      },
      {
        question: "Can I use it for client work?",
        answer:
          "Yes, a client-friendly usage license is included."
      }
    ]
  },
  {
    slug: "automation-blueprint",
    title: "Automation Blueprint",
    shortDescription: "Operational calm through automated workflows.",
    longDescription:
      "Map and build your client delivery system with step-by-step automation guidance and templates.",
    priceDisplay: "$149",
    tags: ["Systems", "Operations"],
    includes: [
      "Workflow mapping template",
      "Automation checklist",
      "Client onboarding scripts",
      "Reporting templates"
    ],
    whoItsFor: [
      "Teams scaling delivery",
      "Founders ready to reduce manual tasks",
      "Operations leads building systems"
    ],
    whoItsNotFor: [
      "Teams without a repeatable service",
      "Short-term campaigns"
    ],
    faq: [
      {
        question: "Does it include automation setup?",
        answer:
          "It provides the blueprint and templates, not the technical build."
      },
      {
        question: "Can it work with our current tools?",
        answer:
          "Yes, the workflows are adaptable to most modern stacks."
      }
    ]
  },
  {
    slug: "offer-clarity-kit",
    title: "Offer Clarity Kit",
    shortDescription: "Define the offer that anchors your funnel.",
    longDescription:
      "A structured kit that clarifies your positioning, pricing narrative, and promise so your marketing can convert with ease.",
    priceDisplay: "$98",
    tags: ["Strategy", "Messaging"],
    includes: [
      "Offer positioning worksheet",
      "Pricing narrative guide",
      "Promise statement builder",
      "Objection mapping sheet"
    ],
    whoItsFor: [
      "Founders refining their offer",
      "Teams preparing a new campaign"
    ],
    whoItsNotFor: [
      "Brands without validated demand"
    ],
    faq: [
      {
        question: "Is this suitable for services?",
        answer:
          "Yes, it is designed for service and product offers."
      }
    ]
  },
  {
    slug: "narrative-notion-suite",
    title: "Narrative Notion Suite",
    shortDescription: "Organize messaging, content, and launch assets.",
    longDescription:
      "A Notion suite that keeps your narrative, launch assets, and content workflow in one calm workspace.",
    priceDisplay: "$79",
    tags: ["Content", "Systems"],
    includes: [
      "Messaging hub",
      "Content calendar",
      "Asset tracker",
      "Launch checklist"
    ],
    whoItsFor: [
      "Marketing leads managing multiple channels",
      "Founders who want a single source of truth"
    ],
    whoItsNotFor: [
      "Teams who prefer spreadsheet-only workflows"
    ],
    faq: [
      {
        question: "Does it include onboarding?",
        answer:
          "A quick start guide is included to set it up in under an hour."
      }
    ]
  },
  {
    slug: "conversion-copy-pack",
    title: "Conversion Copy Pack",
    shortDescription: "Premium copy prompts for every section.",
    longDescription:
      "A curated pack of copy prompts and headline frameworks to sharpen clarity and conversion across landing pages.",
    priceDisplay: "$59",
    tags: ["Copy", "Conversion"],
    includes: [
      "Headline frameworks",
      "CTA prompts",
      "Objection handling scripts",
      "Social proof prompts"
    ],
    whoItsFor: [
      "Founders writing their own copy",
      "Teams refining landing pages"
    ],
    whoItsNotFor: [
      "Teams needing full copywriting services"
    ],
    faq: [
      {
        question: "Is it beginner friendly?",
        answer:
          "Yes, each prompt includes guidance on how to apply it."
      }
    ]
  },
  {
    slug: "analytics-starter-dashboard",
    title: "Analytics Starter Dashboard",
    shortDescription: "Track conversion signals in one view.",
    longDescription:
      "A lightweight dashboard template that captures the core metrics you need to steer conversion decisions.",
    priceDisplay: "$79",
    tags: ["Analytics", "Operations"],
    includes: [
      "Dashboard template",
      "Metric definitions",
      "Weekly review checklist",
      "Signal tracking guide"
    ],
    whoItsFor: [
      "Teams who need a clean reporting view",
      "Founders tracking launch performance"
    ],
    whoItsNotFor: [
      "Enterprises with complex BI stacks"
    ],
    faq: [
      {
        question: "Which tools does it integrate with?",
        answer:
          "It is compatible with common analytics exports and dashboards."
      }
    ]
  },
  {
    slug: "retainer-ops-playbook",
    title: "Retainer Ops Playbook",
    shortDescription: "Run ongoing delivery with calm consistency.",
    longDescription:
      "A playbook for studios and agencies to structure retainers, reporting, and client handoff.",
    priceDisplay: "$119",
    tags: ["Operations", "Systems"],
    includes: [
      "Retainer scope template",
      "Reporting cadence guide",
      "Client handoff scripts",
      "Renewal checklist"
    ],
    whoItsFor: [
      "Studios managing recurring clients",
      "Service teams who need structure"
    ],
    whoItsNotFor: [
      "One-off project teams"
    ],
    faq: [
      {
        question: "Is this for agencies only?",
        answer:
          "It works for consultants, studios, and hybrid product teams."
      }
    ]
  }
];
