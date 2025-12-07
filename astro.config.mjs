import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import { passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  image: {
    service: passthroughImageService(),
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
