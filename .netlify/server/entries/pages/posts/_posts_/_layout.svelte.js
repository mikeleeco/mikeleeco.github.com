import { M as slot } from "../../../../chunks/index.js";
import { B as BackTo } from "../../../../chunks/BackTo.js";
function _layout($$payload, $$props) {
  $$payload.out += `<main><div class="top-level" style="max-width: none;">`;
  BackTo($$payload, { href: "/posts", text: "Blog", classes: "page-heading" });
  $$payload.out += `<!----></div> <div><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></main>`;
}
export {
  _layout as default
};
