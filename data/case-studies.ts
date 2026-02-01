export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  results: string[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "serene-collective",
    client: "Serene Collective",
    title: "A premium wellness launch with 38% higher conversion",
    summary:
      "We redesigned their product narrative, streamlined their lead capture, and built a high-performing launch funnel.",
    results: [
      "38% lift in landing conversion",
      "2.4x increase in qualified consult bookings",
      "Reduced manual onboarding by 60%"
    ],
    services: ["Landing Pages", "Performance Lead Gen", "System Automation"]
  },
  {
    slug: "atlas-studio",
    client: "Atlas Studio",
    title: "Positioning refresh that increased booked calls by 42%",
    summary:
      "We rebuilt their narrative, redesigned the core landing flow, and implemented an optimized lead capture sequence.",
    results: [
      "42% increase in booked calls",
      "21% drop in bounce rate",
      "Streamlined sales handoff in 10 days"
    ],
    services: ["Landing Pages", "Performance Lead Gen"]
  },
  {
    slug: "lumen-advisory",
    client: "Lumen Advisory",
    title: "Automation and reporting that saved 12 hours per week",
    summary:
      "We mapped the delivery lifecycle and introduced a calm automation layer that scaled their client onboarding.",
    results: [
      "12 hours saved per week",
      "Automated onboarding journey",
      "Improved client satisfaction scores"
    ],
    services: ["System Automation", "Performance Lead Gen"]
  }
];
