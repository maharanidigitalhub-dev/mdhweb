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
  }
];
