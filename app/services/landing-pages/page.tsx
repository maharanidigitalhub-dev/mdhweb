import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/services";

const service = services.find((item) => item.slug === "landing-pages");

export default function LandingPagesServicePage() {
  if (!service) {
    return null;
  }
  return (
    <ServiceDetail
      title={service.title}
      summary={service.summary}
      description={service.description}
      outcomes={service.outcomes}
      timeline={service.timeline}
      investment={service.investment}
    />
  );
}
