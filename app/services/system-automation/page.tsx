import { ServiceDetail } from "@/components/ServiceDetail";
import { services } from "@/data/services";

const service = services.find((item) => item.slug === "system-automation");

export default function SystemAutomationPage() {
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
