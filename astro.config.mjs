import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    svelte(),
    compress(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
