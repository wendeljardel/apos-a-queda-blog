import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: "https://aposaqueda.com.br",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
  },
});
