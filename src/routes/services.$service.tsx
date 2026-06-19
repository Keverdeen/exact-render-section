import { createFileRoute } from "@tanstack/react-router";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import placeholderImage from "@/assets/stove.jpg.asset.json";

export const Route = createFileRoute("/services/$service")({
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useParams();
  const title = service
    .split("-")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <ServicePageTemplate
      title={title}
      description="Short service description goes here. Replace this placeholder with a clear, friendly overview of what the service includes, typical turnaround, and why customers choose us."
      bullets={[
        "Benefit or feature placeholder one",
        "Benefit or feature placeholder two",
        "Benefit or feature placeholder three",
      ]}
      ctaLabel="Request Service"
      ctaHref="/"
      imageUrl={placeholderImage.url}
      imageAlt={`${title} service`}
    />
  );
}
