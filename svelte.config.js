import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";
// shifted to static for use on github pages https://kit.svelte.dev/docs/adapters
// shifted to netlify after fail https://github.com/mikeleeco/mikeleeco.github.com/pull/5
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
