import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/site/Sections";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Chiropractic India" },
      {
        name: "description",
        content:
          "Chiropractic education in India — academic pathways, training programmes and the foundation curriculum.",
      },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <main>
      <Education />
    </main>
  );
}
