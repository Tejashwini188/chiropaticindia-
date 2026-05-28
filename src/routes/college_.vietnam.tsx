import { createFileRoute } from "@tanstack/react-router";
import {
  CountryPage,
  buildFaqSchema,
  buildCourseSchema,
  buildBreadcrumbSchema,
} from "@/components/site/CountryPage";
import { getCountry } from "@/data/college-countries";

const country = getCountry("vietnam")!;

export const Route = createFileRoute("/college_/vietnam")({
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
    links: [
      { rel: "canonical", href: country.seo.canonical },
      // Vietnam: bilingual hint per spec — alternate Vietnamese variant flagged if published.
      { rel: "alternate", hrefLang: "en", href: country.seo.canonical },
      { rel: "alternate", hrefLang: "vi", href: country.seo.canonical + "?lang=vi" },
    ],
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
  component: VietnamPage,
});

function VietnamPage() {
  return (
    <main>
      <CountryPage country={country} />
    </main>
  );
}
