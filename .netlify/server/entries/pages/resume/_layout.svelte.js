import { M as slot } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
function _layout($$payload, $$props) {
  let image = "https://www.mikelee.co/img/michael.png";
  Seo($$payload, { title: `Resume | Michael Lee`, description: `Resume`, image });
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
