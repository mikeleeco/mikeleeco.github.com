/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ fetch }) {
	const res = await fetch(`/animation.json`);
	const animations = await res.Response.json();

	return {
		animations
	};
}
