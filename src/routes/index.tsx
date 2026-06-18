import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ChevronRight, CheckCircle2 } from "lucide-react";
import dishwasherAsset from "@/assets/tech-dishwasher.png.asset.json";
import washerAsset from "@/assets/tech-washer.png.asset.json";
import stoveAsset from "@/assets/stove.jpg.asset.json";
import lg from "@/assets/brands/lg.png.asset.json";
import hotpoint from "@/assets/brands/hotpoint.png.asset.json";
import magicchef from "@/assets/brands/magicchef.png.asset.json";
import whirlpool from "@/assets/brands/whirlpool.png.asset.json";
import haier from "@/assets/brands/haier.png.asset.json";
import maytag from "@/assets/brands/maytag.png.asset.json";
import kenmore from "@/assets/brands/kenmore.png.asset.json";
import bosch from "@/assets/brands/bosch.png.asset.json";
import electrolux from "@/assets/brands/electrolux.png.asset.json";
import subzero from "@/assets/brands/subzero.png.asset.json";
import jennair from "@/assets/brands/jennair.png.asset.json";
import samsung from "@/assets/brands/samsung.png.asset.json";
import viking from "@/assets/brands/viking.png.asset.json";
import kitchenaid from "@/assets/brands/kitchenaid.png.asset.json";
import monogram from "@/assets/brands/monogram.png.asset.json";
import wolf from "@/assets/brands/wolf.png.asset.json";
import frigidaire from "@/assets/brands/frigidaire.png.asset.json";
import thermador from "@/assets/brands/thermador.png.asset.json";

const BRANDS = [
  { name: "LG", src: lg.url },
  { name: "Hotpoint", src: hotpoint.url },
  { name: "Magic Chef", src: magicchef.url },
  { name: "Whirlpool", src: whirlpool.url },
  { name: "Haier", src: haier.url },
  { name: "Maytag", src: maytag.url },
  { name: "Kenmore", src: kenmore.url },
  { name: "Bosch", src: bosch.url },
  { name: "Electrolux", src: electrolux.url },
  { name: "Sub-Zero", src: subzero.url },
  { name: "JennAir", src: jennair.url },
  { name: "Samsung", src: samsung.url },
  { name: "Viking", src: viking.url },
  { name: "KitchenAid", src: kitchenaid.url },
  { name: "Monogram", src: monogram.url },
  { name: "Wolf", src: wolf.url },
  { name: "Frigidaire", src: frigidaire.url },
  { name: "Thermador", src: thermador.url },
];

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

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <img
              src={stoveAsset.url}
              alt="Modern stainless steel gas range in a kitchen"
              className="h-[360px] w-full rounded-3xl object-cover shadow-[0_20px_60px_-30px_rgba(15,77,58,0.45)] sm:h-[480px] lg:h-[600px]"
            />
          </div>

          <div className="lg:pl-4">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#0f4d3a] sm:text-5xl">
              Why choose us
            </h2>

            <ul className="mt-10 max-w-[560px] space-y-7">
              {[
                "Same-day service available",
                "Experienced, certified technicians",
                "Repairs for refrigerators, ovens, washers, dryers, dishwashers, and more",
                "Honest pricing with no hidden fees",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-7 w-7 shrink-0 text-[#1f6a4d]"
                    strokeWidth={2}
                  />
                  <span className="text-lg leading-relaxed text-[#0f4d3a]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:py-24 lg:py-28">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#0f4d3a] sm:text-5xl">
          Trusted by Leading Brands
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:mt-16 lg:grid-cols-5 lg:gap-6">
          {BRANDS.map((b) => (
            <div
              key={b.name}
              className="group flex aspect-[16/9] items-center justify-center rounded-2xl border border-[#0f4d3a]/8 bg-white p-2 shadow-[0_4px_18px_-12px_rgba(15,77,58,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-16px_rgba(15,77,58,0.35)]"
            >
              <img
                src={b.src}
                alt={`${b.name} logo`}
                loading="lazy"
                className="max-h-[75%] max-w-[85%] object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
