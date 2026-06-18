import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ChevronRight } from "lucide-react";
import dishwasherAsset from "@/assets/tech-dishwasher.png.asset.json";
import washerAsset from "@/assets/tech-washer.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maryland Appliance Repair & Maintenance" },
      {
        name: "description",
        content:
          "Fast & reliable appliance repair and maintenance in Maryland. Certified technicians for refrigerators, washers, ovens and more.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#f7f6f0]">
      <section className="mx-auto max-w-[1400px] px-4 py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center lg:gap-8">
          {/* Left image */}
          <div className="order-2 lg:order-1">
            <img
              src={dishwasherAsset.url}
              alt="Technician repairing a dishwasher"
              className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px] lg:h-[640px]"
            />
          </div>

          {/* Center content */}
          <div className="order-1 flex flex-col items-center text-center lg:order-2">
            <div className="flex items-center gap-2 text-[#1f6a4d]">
              <MapPin className="h-5 w-5" strokeWidth={2.5} />
              <span className="text-lg font-bold">Maryland</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f4d3a] sm:text-5xl lg:text-[56px]">
              Fast &amp; Reliable Appliance Repair &amp; Maintenance
            </h1>

            <div className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3 text-left">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a8d8c4] text-white">
                  <ChevronRight className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-[15px] leading-relaxed text-[#1f6a4d]">
                  Is your refrigerator not cooling? Washer acting up? Oven not heating? Don't stress — we've got you covered!
                </p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a8d8c4] text-white">
                  <ChevronRight className="h-4 w-4" strokeWidth={3} />
                </span>
                <p className="text-[15px] leading-relaxed text-[#1f6a4d]">
                  Our certified technicians provide fast, reliable, and affordable appliance repair for all major brands.
                </p>
              </div>
            </div>

            <a
              href="tel:+1"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#0f4d3a] py-4 pl-8 pr-3 text-lg font-semibold text-white transition-colors hover:bg-[#0a3b2c]"
            >
              Call now
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </a>
            <p className="mt-4 text-sm text-[#1f6a4d]">
              Call service fee $75 applicable to any repair
            </p>
          </div>

          {/* Right image */}
          <div className="order-3">
            <img
              src={washerAsset.url}
              alt="Technician inspecting a washing machine"
              className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px] lg:h-[640px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
