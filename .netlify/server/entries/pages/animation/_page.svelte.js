import { O as store_get, F as ensure_array_like, P as unsubscribe_stores, S as bind_props, E as pop, A as push } from "../../../chunks/index.js";
import { P as PostCompact } from "../../../chunks/PostCompact.js";
import { B as BackTo } from "../../../chunks/BackTo.js";
import { w as windowWidth } from "../../../chunks/global.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let data = $$props["data"];
  let animations = data.animations;
  let filteredAnimations = animations.sort((a, b) => {
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });
  store_get($$store_subs ??= {}, "$windowWidth", windowWidth) < 468;
  const each_array = ensure_array_like(filteredAnimations);
  $$payload.out += `<main class="main">`;
  BackTo($$payload, { href: "/", text: "Home", classes: "page-heading" });
  $$payload.out += `<!----> <h1>Animation</h1> <div><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$payload.out += `<div>`;
    PostCompact($$payload, { post: post.metadata, slug: post.slug });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
