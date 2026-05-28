import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/site/Sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Chiropractic India" },
      {
        name: "description",
        content: "Frequently asked questions about Chiropractic India.",
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <main>
      <FAQ />
    </main>
  );
}
