"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyFilter({ studies }: { studies: CaseStudy[] }) {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const industries = useMemo(() => {
    const set = new Set<string>();
    studies.forEach((study) => set.add(study.industry));
    return ["All", ...Array.from(set).sort()];
  }, [studies]);

  const filtered = useMemo(() => {
    if (activeIndustry === "All") {
      return studies;
    }
    return studies.filter((study) => study.industry === activeIndustry);
  }, [studies, activeIndustry]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {industries.map((industry) => (
          <button
            key={industry}
            type="button"
            onClick={() => setActiveIndustry(industry)}
            className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
              activeIndustry === industry
                ? "border-charcoal bg-charcoal text-cream"
                : "border-line bg-cream text-charcoal/70 hover:border-charcoal/40"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`}>
            <article className="rounded-2xl border border-line bg-white/80 p-6 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                {study.industry}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-charcoal">
                {study.title}
              </h3>
              <p className="mt-3 text-sm text-charcoal/70">{study.problem}</p>
              <ul className="mt-4 space-y-2 text-xs text-charcoal/60">
                {study.results.slice(0, 2).map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
                View case study
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
