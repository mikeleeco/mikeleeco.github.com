import { M as slot } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
function _layout($$payload, $$props) {
  let image = "https://www.mikelee.co/img/michael.png";
  let title = "Projects";
  let description = "Some of my projects.";
  Seo($$payload, { title, description, image });
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
