import { M as slot } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { C as ContainerLayout } from "../../../chunks/ContainerLayout.js";
function _layout($$payload, $$props) {
  let image = "https://www.mikelee.co/img/michael.png";
  let title = "Blog";
  let description = "Some of my posts.";
  Seo($$payload, { title, description, image });
  $$payload.out += `<!----> `;
  ContainerLayout($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      slot($$payload2, $$props, "default", {});
      $$payload2.out += `<!---->`;
    }
  });
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
