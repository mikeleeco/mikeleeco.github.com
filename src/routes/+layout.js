import { error } from '@sveltejs/kit';

// Ensures all pages under this layout (which is all of them) are statically prerendered at build time
export const prerender = 'auto';

// Allows client side routing. Necessary for page transitions and link prefetching; change to false if you prefer ordinary routing without JS
export const csr = true;

export const load = async ({ url, fetch }) => {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		throw error(500, err);
	}
};
