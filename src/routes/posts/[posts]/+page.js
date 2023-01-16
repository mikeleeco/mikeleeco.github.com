export async function load({ params }) {
	const posts = await import(`../posts/${params.posts}.md`);

	return {
		posts
	};
}
