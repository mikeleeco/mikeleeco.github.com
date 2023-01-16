// base url for /projects - load all markdown files and construct object with metadata (yaml) and slug (file name)
export async function GET() {
  const imports = import.meta.glob("../projects/**/*.md");
  let body = [];
  for (const path in imports) {
    body.push(
      imports[path]().then(({ metadata }) => {
        return {
          metadata,
          slug: path.split("/").pop()?.slice(0, -3).toLowerCase(),
        };
      })
    );
  }

  const projects = await Promise.all(body);

  return new Response(JSON.stringify(projects));
}
