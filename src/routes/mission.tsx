import { createFileRoute } from "@tanstack/react-router";
import { Mission } from "@/components/site/Sections";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Mission — Chiropractic India" },
      {
        name: "description",
        content:
          "Our mission to advance chiropractic education, research and awareness across India.",
      },
    ],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <main>
      <Mission />
    </main>
  );
}
