import type { ReactNode } from "react";

import { CheckCircle2 } from "lucide-react";

export type ServicePageTemplateProps = {
  title: string;
  description: ReactNode;
  bullets?: string[];
  bulletsHeading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl: string;
  imageAlt?: string;
};

export function ServicePageTemplate({
  title,
  description,
  bullets = [],
  bulletsHeading,
  ctaLabel = "Request Service",
  ctaHref = "tel:+12408861465",
  imageUrl,
  imageAlt = "",
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen bg-[#f7f6f0]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Text */}
          <div className="order-1 min-w-0">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#0f4d3a] sm:text-5xl">
              {title}
            </h1>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-[#1f6a4d]">
              {description}
            </div>

            {bullets.length > 0 && (
              <div className="mt-6">
                {bulletsHeading && (
                  <p className="mb-3 text-base font-semibold text-[#0f4d3a]">
                    {bulletsHeading}
                  </p>
                )}
                <ul className="space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[#0f4d3a]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0f4d3a]" />
                      <span className="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8">
            <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#0f4d3a] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#0c3d2e]"
              >
                {ctaLabel}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-2 min-w-0">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-auto w-full rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicePageTemplate;
