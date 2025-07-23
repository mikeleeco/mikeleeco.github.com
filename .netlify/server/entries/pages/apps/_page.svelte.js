import "clsx";
import "../../../chunks/client.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { C as ContainerLayout } from "../../../chunks/ContainerLayout.js";
import { B as BackTo } from "../../../chunks/BackTo.js";
function _page($$payload) {
  Seo($$payload, {
    title: (
      // export let data;
      "Apps"
    )
  });
  $$payload.out += `<!----> `;
  ContainerLayout($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex flex-col"><div>`;
      BackTo($$payload2, { href: `/`, text: `Home`, classes: "" });
      $$payload2.out += `<!----></div> <div class="grid gap-5"><h1>Apps</h1> <p>More to come...</p></div></div>`;
    }
  });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
