import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
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
