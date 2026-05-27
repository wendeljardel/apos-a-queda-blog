import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const essays = (await getCollection("essays", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "Após a Queda",
    description:
      "Ensaios sobre autoridade, consciência e relações humanas após o pecado original.",
    site: context.site ?? "https://aposaqueda.com.br",
    items: essays.map((essay) => ({
      title: essay.data.title,
      description: essay.data.description,
      pubDate: essay.data.pubDate,
      link: `/ensaios/${essay.id}/`,
      categories: essay.data.categories,
    })),
  });
};
