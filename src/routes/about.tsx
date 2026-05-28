import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chiropractic India" },
      {
        name: "description",
        content:
          "Chiropractic India is a non-profit education and research foundation advancing the chiropractic profession in India.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}
