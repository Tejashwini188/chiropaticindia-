import { createFileRoute } from "@tanstack/react-router";
import { College } from "@/components/site/Sections";

export const Route = createFileRoute("/college")({
  head: () => ({
    meta: [
      { title: "College — Chiropractic India" },
      {
        name: "description",
        content:
          "India's own Chiropractic College — 6-year Masters Fellowship, Faculty Training Program & AI-supported academic platform, launching August 2026.",
      },
    ],
  }),
  component: CollegePage,
});

function CollegePage() {
  return (
    <main>
      <College />
    </main>
  );
}
