import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  image: {
    service: {
      entrypoint: "astro/assets/services/noop"
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
  ],
});
