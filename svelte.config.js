import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig), sveltePreprocess],
	kit: { adapter: adapter() },
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	alias: {
		$stores: resolve('./src/stores/'),
		$components: resolve('./src/lib/components/'),
		$helpers: resolve('./src/helpers/'),
		$stores: resolve('./src/stores'),
		$lib: resolve('./src/lib/')
	}
};

export default config;
