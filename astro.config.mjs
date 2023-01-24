import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), svelte(), compress()]
});