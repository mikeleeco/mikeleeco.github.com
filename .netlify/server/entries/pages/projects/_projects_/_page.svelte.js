import { J as escape_html, I as attr, S as bind_props, E as pop, A as push, K as stringify } from "../../../../chunks/index.js";
import { B as BackTo } from "../../../../chunks/BackTo.js";
import { S as Seo } from "../../../../chunks/Seo.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let projects = data.projects;
  let { title, description, categories, img, url } = projects.metadata;
  let image = !img ? "https://www.mikelee.co/img/michael.png" : "https://www.mikelee.co" + img;
  Seo($$payload, { title, description, image });
  $$payload.out += `<!----> <article><div class="flex flex-col gap-5"><h2 class="page-title">${escape_html(
    // console.log(image);
    title
  )}</h2> <h3 class="page-subtitle">${escape_html(description)}</h3> `;
  if (url === "") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img loading="lazy"${attr("src", img)}${attr("alt", `Project img for ${stringify(title)}`)} class="post-img"/>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<a class="no-underline"${attr("href", url)}><img loading="lazy"${attr("src", img)}${attr("alt", `Project img for ${stringify(title)}`)} class="post-img"/></a> <a${attr("href", url)}>${escape_html(url)}</a>`;
  }
  $$payload.out += `<!--]--> <!---->`;
  projects.default?.($$payload, {});
  $$payload.out += `<!----></div></article> <div class="py-5">`;
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
