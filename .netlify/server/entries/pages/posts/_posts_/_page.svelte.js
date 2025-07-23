import { J as escape_html, S as bind_props, E as pop, A as push } from "../../../../chunks/index.js";
import { B as BackTo } from "../../../../chunks/BackTo.js";
import { S as Seo } from "../../../../chunks/Seo.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let posts = data.posts;
  let { title, description, categories, img, tags } = posts.metadata;
  let image = !img ? "https://www.mikelee.co/img/michael.png" : "https://www.mikelee.co" + img;
  let keywords = tags;
  Seo($$payload, { title, description, image, keywords });
  $$payload.out += `<!----> <article><div class="flex flex-col gap-5"><h3 class="page-title overflow-hidden">${escape_html(
    // console.log(image);
    title
  )}</h3> <h4 class="page-subtitle">${escape_html(description)}</h4> <!---->`;
  posts.default?.($$payload, {});
  $$payload.out += `<!----></div></article> <div>`;
  BackTo($$payload, {
    href: `/${categories}`,
    text: `Back to all ${categories}`,
    classes: "border-top"
  });
  $$payload.out += `<!----></div>`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
