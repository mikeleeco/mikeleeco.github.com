import { O as store_get, P as unsubscribe_stores } from "./index.js";
import { w as windowWidth } from "./global.js";
import { w as writable } from "./index2.js";
const theme = writable("");
function Logo($$payload) {
  var $$store_subs;
  store_get($$store_subs ??= {}, "$windowWidth", windowWidth) < 468;
  $$payload.out += `<a class="post-img" href="/">`;
  if (store_get($$store_subs ??= {}, "$theme", theme) == "dark") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img loading="lazy" src="/images/icons/logoInvert.png" alt="Mike Lee Logo"/>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img loading="lazy" src="/images/icons/logo.png" alt="Mike Lee Logo"/>`;
  }
  $$payload.out += `<!--]--></a>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  Logo as L,
  theme as t
};
