import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";

export default defineConfig({
  server: {
    port: 4000,
  },
  integrations: [
    mdx(),
    tailwind(),
    compress(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
