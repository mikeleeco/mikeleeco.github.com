import { Q as fallback, V as head, S as bind_props, J as escape_html, I as attr } from "./index.js";
function Seo($$payload, $$props) {
  let title = fallback($$props["title"], "Mike Lee");
  let description = fallback($$props["description"], "A developer living in the Washington, DC area specializing in the creation of web applications,graphics, and other data-driven projects using R, Shiny, React, Svelte, and D3. I teach workshops on R programming and data visualization.");
  let keywords = fallback($$props["keywords"], "web development, data science, data visualization, R, Shiny, React, Svelte");
  let image = fallback($$props["image"], "https://www.mikelee.co/img/michael.png");
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:site" content="@mikeleeco"/> <meta name="twitter:creator" content="@mikeleeco"/> <meta name="twitter:image"${attr("content", image)}/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/> <meta name="title" property="og:title"${attr("content", title)}/> <meta name="description" property="og:description"${attr("content", description)}/> <meta name="image" property="og:image"${attr("content", image)}/> <meta name="keywords"${attr("content", keywords)}/> <meta name="topic"${attr("content", keywords)}/> <meta name="language" content="EN"/> <meta name="robots" content="index, follow"/> <meta name="abstract"${attr("content", description)}/> <meta name="summary"${attr("content", description)}/> <meta name="author" content="Mike Lee"/> <meta name="url" content="https://www.mikeleeco.com"/>`;
  });
  bind_props($$props, { title, description, keywords, image });
}
export {
  Seo as S
};
