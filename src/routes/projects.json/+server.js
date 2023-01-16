export async function GET() {
	const imports = import.meta.glob('../projects/**/*.md');
	let body = [];
	for (const path in imports) {
		body.push(
			imports[path]().then(({ metadata }) => {
				return {
					metadata,
					slug: path.split('/').pop().slice(0, -3)
				};
			})
		);
	}

	const projects = await Promise.all(body);

	return new Response(JSON.stringify(projects));
}
