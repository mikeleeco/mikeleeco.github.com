export async function load({ params }) {
	const animation = await import(`../animation/${params.animation}.md`);

	return {
		animation
	};
}
