import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
// shifted to static for use on github pages https://kit.svelte.dev/docs/adapters
// import adapter from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";
import { mdsvexConfig } from "./mdsvex.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
  },
};

export default config;
