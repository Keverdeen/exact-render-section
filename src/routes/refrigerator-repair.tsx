import { createFileRoute } from "@tanstack/react-router";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import refrigeratorImage from "@/assets/refrigerator_repair.jpg.asset.json";

export const Route = createFileRoute("/refrigerator-repair")({
  head: () => ({
    meta: [
      { title: "Refrigerator Repair — Maryland Appliance Repair" },
      {
        name: "description",
        content:
          "Fast, reliable refrigerator repair in Maryland. Certified technicians fix cooling issues, leaks, ice makers, compressors, and more for all major brands.",
      },
      { property: "og:title", content: "Refrigerator Repair — Maryland Appliance Repair" },
      {
        property: "og:description",
        content:
          "Fast, reliable refrigerator repair in Maryland for all major brands and models.",
      },
      { property: "og:image", content: refrigeratorImage.url },
      { name: "twitter:image", content: refrigeratorImage.url },
    ],
  }),
  component: RefrigeratorRepairPage,
});

function RefrigeratorRepairPage() {
  return (
    <ServicePageTemplate
      title="Refrigerator Repair"
      description={
        <>
          <p>
            A faulty refrigerator can lead to food spoilage and inconvenience. Whether your refrigerator is not cooling properly, making unusual noises, leaking water, or running constantly, our experienced technicians provide fast and reliable repair services.
          </p>
          <p>
            We service all major refrigerator brands and models, diagnosing problems quickly and restoring efficient performance.
          </p>
        </>
      }
      bulletsHeading="Common Refrigerator Problems We Repair:"
      bullets={[
        "Refrigerator not cooling",
        "Excessive frost buildup",
        "Water leaks",
        "Strange noises",
        "Faulty thermostat",
        "Compressor issues",
      ]}
      ctaLabel="Request Service"
      ctaHref="tel:+12408861465"
      imageUrl={refrigeratorImage.url}
      imageAlt="Refrigerator Repair service"
    />
  );
}
