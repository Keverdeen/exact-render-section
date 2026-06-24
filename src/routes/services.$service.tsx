import { createFileRoute } from "@tanstack/react-router";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import ovenImage from "@/assets/oven_repair.jpg.asset.json";
import freezerImage from "@/assets/freezer_repair.jpg.asset.json";
import stoveImage from "@/assets/stove_repair.jpg.asset.json";
import dishwasherImage from "@/assets/dishwasher_repair.jpg.asset.json";
import washerImage from "@/assets/washer_repair.jpg.asset.json";
import dryerImageSrc from "@/assets/dryer_repair.png";
import wineCoolerImageSrc from "@/assets/wine_cooler_repair.png";
const dryerImage = { url: dryerImageSrc };
const wineCoolerImage = { url: wineCoolerImageSrc };
import microwaveImage from "@/assets/microwave_repair.jpg.asset.json";
import wallOvenImage from "@/assets/wall_oven_repair.jpg.asset.json";
import refrigeratorImage from "@/assets/refrigerator_repair.jpg.asset.json";
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
  "freezer-repair": {
    title: "Freezer Repair",
    description: (
      <>
        <p>
          A broken freezer can lead to spoiled food and costly waste. Our experienced technicians provide professional freezer repair services for residential and commercial customers, restoring proper cooling and performance quickly.
        </p>
        <p>
          We service all major freezer brands and models and help prevent food loss with prompt and reliable repairs.
        </p>
      </>
    ),
    bulletsHeading: "Common Freezer Problems We Repair:",
    bullets: [
      "Freezer not freezing",
      "Excessive frost buildup",
      "Water leaks",
      "Loud or unusual noises",
      "Faulty thermostat",
      "Compressor issues",
    ],
    imageUrl: freezerImage.url,
    imageAlt: "Freezer Repair service",
  },
  "refrigerator-repair": {
    title: "Refrigerator Repair",
    description: (
      <>
        <p>
          A failing refrigerator can lead to spoiled food and costly waste. Our experienced technicians provide fast, reliable refrigerator repair services for all major brands and models, restoring proper cooling and performance.
        </p>
        <p>
          We diagnose and resolve cooling, electrical, and mechanical issues to keep your kitchen running smoothly.
        </p>
      </>
    ),
    bulletsHeading: "Common Refrigerator Problems We Repair:",
    bullets: [
      "Refrigerator not cooling",
      "Water leaks",
      "Ice maker not working",
      "Unusual noises",
      "Faulty thermostat",
      "Compressor issues",
    ],
    imageUrl: refrigeratorImage.url,
    imageAlt: "Refrigerator Repair service",
  },
  "stove-repair": {
    title: "Stove Repair",
    description: (
      <>
        <p>
          A malfunctioning stove can disrupt your daily routine and create safety concerns. Our technicians repair both gas and electric stoves, restoring reliable performance for safe cooking.
        </p>
        <p>
          We provide fast and dependable stove repair services for all major brands and models.
        </p>
      </>
    ),
    bulletsHeading: "Common Stove Problems We Repair:",
    bullets: [
      "Burners not heating",
      "Burners won't ignite",
      "Faulty temperature controls",
      "Electrical issues",
      "Gas ignition problems",
      "Damaged switches and knobs",
    ],
    imageUrl: stoveImage.url,
    imageAlt: "Stove Repair service",
  },
  "dishwasher-repair": {
    title: "Dishwasher Repair",
    description: (
      <>
        <p>
          A broken dishwasher can leave you with dirty dishes and wasted time. Our dishwasher repair experts diagnose and repair drainage problems, cleaning performance issues, and electrical malfunctions.
        </p>
        <p>
          We service all major dishwasher brands and help restore convenience to your kitchen.
        </p>
      </>
    ),
    bulletsHeading: "Common Dishwasher Problems We Repair:",
    bullets: [
      "Dishwasher not draining",
      "Dishes not getting clean",
      "Water leaks",
      "Door latch issues",
      "Not starting",
      "Cycle interruptions",
    ],
    imageUrl: dishwasherImage.url,
    imageAlt: "Dishwasher Repair service",
  },
  "washer-repair": {
    title: "Washer Repair",
    description: (
      <>
        <p>
          When your washing machine stops working, laundry can pile up quickly. Our washer repair technicians provide fast and effective repairs for all major washer brands and models.
        </p>
        <p>
          We work on front-load, top-load, and high-efficiency washing machines.
        </p>
      </>
    ),
    bulletsHeading: "Common Washer Problems We Repair:",
    bullets: [
      "Washer not spinning",
      "Washer not draining",
      "Water leaks",
      "Excessive vibration",
      "Washer not filling with water",
      "Error codes and control issues",
    ],
    imageUrl: washerImage.url,
    imageAlt: "Washer Repair service",
  },
  "dryer-repair": {
    title: "Dryer Repair",
    description: (
      <>
        <p>
          A malfunctioning dryer can leave clothes damp and increase energy costs. Our dryer repair specialists diagnose heating problems, electrical issues, and airflow restrictions to restore efficient drying performance.
        </p>
        <p>
          We service both gas and electric dryers.
        </p>
      </>
    ),
    bulletsHeading: "Common Dryer Problems We Repair:",
    bullets: [
      "Dryer not heating",
      "Clothes taking too long to dry",
      "Dryer won't start",
      "Burning smell",
      "Excessive noise",
      "Drum not turning",
    ],
    imageUrl: dryerImage.url,
    imageAlt: "Dryer Repair service",
  },
  "wine-cooler-repair": {
    title: "Wine Cooler Repair",
    description: (
      <>
        <p>
          Protect your wine investment with professional wine cooler repair services. We repair cooling issues, temperature inconsistencies, and electrical problems in built-in and freestanding wine coolers.
        </p>
        <p>
          Our technicians service all major wine cooler brands and models.
        </p>
      </>
    ),
    bulletsHeading: "Common Wine Cooler Problems We Repair:",
    bullets: [
      "Temperature fluctuations",
      "Wine cooler not cooling",
      "Water leaks",
      "Excessive vibration",
      "Faulty thermostat",
      "Compressor issues",
    ],
    imageUrl: wineCoolerImage.url,
    imageAlt: "Wine Cooler Repair service",
  },
  "microwave-repair": {
    title: "Microwave Repair",
    description: (
      <>
        <p>
          A broken microwave can make everyday cooking difficult. Our microwave repair specialists quickly diagnose and repair heating, electrical, and mechanical issues.
        </p>
        <p>
          We service countertop, built-in, and over-the-range microwave models.
        </p>
      </>
    ),
    bulletsHeading: "Common Microwave Problems We Repair:",
    bullets: [
      "Microwave not heating",
      "Sparking inside microwave",
      "Turntable not rotating",
      "Broken keypad",
      "Door switch problems",
      "Display issues",
    ],
    imageUrl: microwaveImage.url,
    imageAlt: "Microwave Repair service",
  },
  "wall-oven-repair": {
    title: "Wall Oven Repair",
    description: (
      <>
        <p>
          Wall ovens require specialized repair expertise when problems arise. Our technicians provide professional wall oven repair services for residential kitchens and luxury appliance brands.
        </p>
        <p>
          We quickly identify and resolve performance and electrical issues.
        </p>
      </>
    ),
    bulletsHeading: "Common Wall Oven Problems We Repair:",
    bullets: [
      "Oven not heating",
      "Uneven baking",
      "Faulty control panel",
      "Temperature inaccuracies",
      "Error messages",
      "Door seal problems",
    ],
    imageUrl: wallOvenImage.url,
    imageAlt: "Wall Oven Repair service",
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
        ctaHref="tel:+12408861465"
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
      ctaHref="tel:+12408861465"
      imageUrl={placeholderImage.url}
      imageAlt={`${title} service`}
    />
  );
}
