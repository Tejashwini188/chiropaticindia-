import { createFileRoute } from "@tanstack/react-router";
import { FacultyPositions } from "@/components/site/Sections";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — Chiropractic India" },
      {
        name: "description",
        content:
          "Open faculty positions at Chiropractic India — join the founding cohort of educators shaping the profession in India.",
      },
    ],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  return (
    <main>
      <FacultyPositions />
    </main>
  );
}
