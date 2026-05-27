import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://aposaqueda.com.br",
  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      theme: "min-light",
    },
  },

  adapter: cloudflare(),
});