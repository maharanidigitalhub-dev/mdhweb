export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  problem: string;
  approach: string[];
  deliverables: string[];
  results: string[];
  timeline: string;
  tools: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "serene-collective",
    title: "Premium wellness launch with 38% higher conversion",
    industry: "Wellness",
    problem:
      "Serene Collective needed a launch narrative that felt premium while converting high-intent visitors into consult bookings.",
    approach: [
      "Refined the offer story into a three-part narrative",
      "Designed a conversion-first landing journey",
      "Aligned lead capture with sales qualification"
    ],
    deliverables: [
      "Landing page strategy",
      "Editorial UI system",
      "Lead capture flow",
      "Reporting dashboard"
    ],
    results: [
      "38% lift in landing conversion",
      "2.4x increase in qualified consult bookings",
      "Reduced manual onboarding by 60%"
    ],
    timeline: "5 weeks",
    tools: ["Next.js", "Figma", "Notion", "HubSpot"]
  },
  {
    slug: "atlas-studio",
    title: "Positioning refresh that increased booked calls by 42%",
    industry: "Creative Studio",
    problem:
      "Atlas Studio had strong work but lacked a clear path for prospects to book high-value engagements.",
    approach: [
      "Clarified positioning and service hierarchy",
      "Built a focused landing flow",
      "Introduced a qualification-first lead sequence"
    ],
    deliverables: [
      "Messaging framework",
      "Landing page design",
      "Qualification form",
      "Conversion analytics setup"
    ],
    results: [
      "42% increase in booked calls",
      "21% drop in bounce rate",
      "Streamlined sales handoff in 10 days"
    ],
    timeline: "4 weeks",
    tools: ["Next.js", "Figma", "Airtable", "Google Analytics"]
  },
  {
    slug: "lumen-advisory",
    title: "Automation system that saved 12 hours per week",
    industry: "Advisory",
    problem:
      "Lumen Advisory needed to reduce manual onboarding while keeping a premium client experience.",
    approach: [
      "Mapped the delivery lifecycle",
      "Automated onboarding and reporting",
      "Documented workflows for the team"
    ],
    deliverables: [
      "Workflow map",
      "Automation build",
      "Client scripts",
      "Operations documentation"
    ],
    results: [
      "12 hours saved per week",
      "Automated onboarding journey",
      "Improved client satisfaction scores"
    ],
    timeline: "3 weeks",
    tools: ["Notion", "Zapier", "Slack", "Google Sheets"]
  },
  {
    slug: "sunlit-atelier",
    title: "Lead quality lift for a premium design atelier",
    industry: "Luxury Design",
    problem:
      "Sunlit Atelier attracted high traffic but low qualification, leading to mismatched inquiries.",
    approach: [
      "Reframed the offer for premium positioning",
      "Built a two-step lead capture flow",
      "Implemented lead scoring"
    ],
    deliverables: [
      "Offer positioning",
      "Landing page refresh",
      "Lead scoring model",
      "CRM handoff playbook"
    ],
    results: [
      "55% increase in qualified inquiries",
      "Shorter sales cycle",
      "Clearer expectation setting"
    ],
    timeline: "4 weeks",
    tools: ["Webflow", "Figma", "HubSpot", "Looker Studio"]
  },
  {
    slug: "harbor-health",
    title: "Calm onboarding system for a telehealth brand",
    industry: "Health",
    problem:
      "Harbor Health needed a frictionless onboarding experience to support rapid growth.",
    approach: [
      "Audited onboarding touchpoints",
      "Automated scheduling and updates",
      "Aligned messaging across channels"
    ],
    deliverables: [
      "Onboarding workflow",
      "Automation sequence",
      "Client communication templates",
      "Performance checklist"
    ],
    results: [
      "32% faster onboarding",
      "Higher appointment completion rate",
      "Reduced support requests"
    ],
    timeline: "5 weeks",
    tools: ["Calendly", "Zapier", "Airtable", "Slack"]
  }
];
