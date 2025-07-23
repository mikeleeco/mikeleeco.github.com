import { Q as fallback, G as attr_class, I as attr, T as clsx, S as bind_props } from "./index.js";
import { h as html } from "./html.js";
function BackTo($$payload, $$props) {
  let href = $$props["href"];
  let text = fallback($$props["text"], "");
  let classes = fallback($$props["classes"], "");
  $$payload.out += `<div${attr_class(clsx(classes))}><a class="padding-bottom svelte-yjpr2y"${attr("href", href)} data-sveltekit-preload-data="">← ${html(text)}</a></div>`;
  bind_props($$props, { href, text, classes });
}
export {
  BackTo as B
};
