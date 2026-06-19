import { createFileRoute } from "@tanstack/react-router";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import ovenImage from "@/assets/oven_repair.jpg.asset.json";
import placeholderImage from "@/assets/stove.jpg.asset.json";

export const Route = createFileRoute("/services/$service")({
  component: ServicePage,
});

const serviceContent: Record<
  string,
  {
    title: string;
    description: React.ReactNode;
    bullets?: string[];
    bulletsHeading?: string;
    imageUrl: string;
    imageAlt: string;
  }
> = {
  "oven-repair": {
    title: "Oven Repair",
    description: (
      <>
        <p>
          A malfunctioning oven can make meal preparation frustrating and inconvenient. Whether your oven is not heating, heating unevenly, displaying error codes, or failing to maintain the correct temperature, our experienced technicians provide fast and reliable oven repair services. We service all major brands and models, diagnosing issues quickly to restore your appliance&apos;s performance.
        </p>
        <p>
          Our professional oven repair services help homeowners avoid costly replacements while extending the lifespan of their appliances.
        </p>
      </>
    ),
    bulletsHeading: "Common Oven Problems We Repair:",
    bullets: [
      "Oven not heating",
      "Uneven cooking temperatures",
      "Faulty thermostat",
      "Broken heating elements",
      "Error codes and control panel issues",
      "Oven door not closing properly",
    ],
    imageUrl: ovenImage.url,
    imageAlt: "Oven Repair service",
  },
};

function ServicePage() {
  const { service } = Route.useParams();
  const content = serviceContent[service];

  if (content) {
    return (
      <ServicePageTemplate
        title={content.title}
        description={content.description}
        bullets={content.bullets}
        bulletsHeading={content.bulletsHeading}
        ctaLabel="Request Service"
        ctaHref="tel:+10000000000"
        imageUrl={content.imageUrl}
        imageAlt={content.imageAlt}
      />
    );
  }

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
      ctaHref="tel:+10000000000"
      imageUrl={placeholderImage.url}
      imageAlt={`${title} service`}
    />
  );
}
