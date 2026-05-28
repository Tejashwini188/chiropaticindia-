import { createFileRoute } from "@tanstack/react-router";
import { Blog } from "@/components/site/Sections";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Chiropractic India" },
      {
        name: "description",
        content: "Stories, insights and updates from the Chiropractic India team.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main>
      <Blog />
    </main>
  );
}
