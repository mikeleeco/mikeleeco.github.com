// load markdown files

export async function load({ params }) {
	const projects = await import(`../projects/${params.projects}.md`);

	return {
		projects
	};
}
