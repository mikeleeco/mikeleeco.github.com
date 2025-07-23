import { M as slot } from "../../../../chunks/index.js";
import { B as BackTo } from "../../../../chunks/BackTo.js";
import { S as Seo } from "../../../../chunks/Seo.js";
function _layout($$payload, $$props) {
  let title;
  let description;
  let image = "https://www.mikelee.co/img/michael.png";
  Seo($$payload, { title, description, image });
  $$payload.out += `<!----> <main><div class="top-level" style="max-width: none;">`;
  BackTo($$payload, {
    href: "/animation",
    text: "Animation",
    classes: "page-heading"
  });
  $$payload.out += `<!----></div> <div class="slug main-content"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></main>`;
}
export {
  _layout as default
};
