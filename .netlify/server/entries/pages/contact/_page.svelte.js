import "clsx";
import "../../../chunks/client.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { C as ContainerLayout } from "../../../chunks/ContainerLayout.js";
function _page($$payload) {
  Seo($$payload, {
    title: (
      // export let data;
      "About"
    )
  });
  $$payload.out += `<!----> `;
  ContainerLayout($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<div class="grid gap-5"><h1>Contact</h1> <div><h2>Socials</h2> <ul><li><span>Instagram: <a href="https://www.instagram.com/mikeleeco">instagram.com/mikeleeco</a></span></li> <li><span>Blue Sky: <a href="https://bsky.app/profile/mikelee.co">https://bsky.app/profile/mikelee.co</a></span></li></ul></div></div>`;
    }
  });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
