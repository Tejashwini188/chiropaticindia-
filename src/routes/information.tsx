import { createFileRoute } from "@tanstack/react-router";
import { Information } from "@/components/site/Sections";

export const Route = createFileRoute("/information")({
  head: () => ({
    meta: [
      { title: "Information Hub — Chiropractic India" },
      {
        name: "description",
        content:
          "Research, evidence and educational resources from Chiropractic India.",
      },
    ],
  }),
  component: InformationPage,
});

function InformationPage() {
  return (
    <main>
      <Information />
    </main>
  );
}
