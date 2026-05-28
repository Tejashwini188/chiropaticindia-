import { createFileRoute } from "@tanstack/react-router";
import {
  CountryPage,
  buildFaqSchema,
  buildCourseSchema,
  buildBreadcrumbSchema,
} from "@/components/site/CountryPage";
import { getCountry } from "@/data/college-countries";

const country = getCountry("sri-lanka")!;

export const Route = createFileRoute("/college_/sri-lanka")({
  head: () => ({
    meta: [
      { title: country.seo.metaTitle },
      { name: "description", content: country.seo.metaDescription },
      { property: "og:title", content: country.seo.metaTitle },
      { property: "og:description", content: country.seo.metaDescription },
      { property: "og:url", content: country.seo.canonical },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: country.seo.canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFaqSchema(country)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildCourseSchema(country)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildBreadcrumbSchema(country)),
      },
    ],
  }),
  component: SriLankaPage,
});

function SriLankaPage() {
  return (
    <main>
      <CountryPage country={country} />
    </main>
  );
}
