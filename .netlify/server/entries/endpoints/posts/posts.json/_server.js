async function GET() {
  const imports = /* @__PURE__ */ Object.assign({});
  let body = [];
  for (const path in imports) {
    body.push(
      imports[path]().then(({ metadata }) => {
        return {
          metadata,
          slug: path.split("/").pop().slice(0, -3)
        };
      })
    );
  }
  const posts = await Promise.all(body);
  return new Response(JSON.stringify(posts));
}
export {
  GET
};
