import { J as escape_html, I as attr, S as bind_props, E as pop, A as push } from "../../../../chunks/index.js";
import { B as BackTo } from "../../../../chunks/BackTo.js";
import { S as Seo } from "../../../../chunks/Seo.js";
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let animation = data.animation;
  let { title, description, categories, img } = animation.metadata;
  let image = !img ? "https://www.mikelee.co/img/michael.png" : "https://www.mikelee.co" + img;
  Seo($$payload, { title, description, image });
  $$payload.out += `<!----> <article><div class="flex flex-col gap-5"><h3 class="page-title overflow-hidden">${escape_html(title)}</h3> <h4 class="page-subtitle">${escape_html(description)}</h4> <img${attr("src", image.replace(".png", ".gif"))}${attr("alt", description)} class="max-w-full lg:max-h-full"/> <!---->`;
  animation.default?.($$payload, {});
  $$payload.out += `<!----> <p>Interested in learning more? <a href="/contact">Contact me</a> to consult on your next project.</p></div></article> <div class="flex flex-col gap-5 py-5">`;
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
