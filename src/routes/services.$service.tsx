import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$service")({
  component: ServicePlaceholder,
});

function ServicePlaceholder() {
  const { service } = Route.useParams();
  const title = service
    .split("-")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-[#f7f6f0] px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#0f4d3a] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[#1f6a4d]">
          This service page is coming soon.
        </p>
      </div>
    </main>
  );
}
