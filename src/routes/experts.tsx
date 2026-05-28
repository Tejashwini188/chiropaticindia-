import { createFileRoute } from "@tanstack/react-router";
import { Team } from "@/components/site/Sections";

export const Route = createFileRoute("/experts")({
  head: () => ({
    meta: [
      { title: "Experts — Chiropractic India" },
      {
        name: "description",
        content:
          "Meet the chiropractors, academics and clinicians driving Chiropractic India forward.",
      },
    ],
  }),
  component: ExpertsPage,
});

function ExpertsPage() {
  return (
    <main>
      <Team />
    </main>
  );
}
