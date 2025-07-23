import { N as getContext, J as escape_html, O as store_get, P as unsubscribe_stores, E as pop, A as push } from "../../chunks/index.js";
import "../../chunks/client.js";
import { I as Icon } from "../../chunks/Icon.js";
import { h as html } from "../../chunks/html.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="error svelte-1c8ykc5"><img loading="lazy" src="/img/ghostbusters.gif" alt="Peter Venkman denial animation. Sorry you've reached an error. - Mike"/> <hr/> <h2 class="svelte-1c8ykc5">Error ${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h2> <button class="svelte-1c8ykc5">${escape_html("Show")} the technical details ${html("&darr;")}</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h1 class="svelte-1c8ykc5">Sorry we've encountered an error.</h1> <p class="svelte-1c8ykc5">If this continues please feel free to reach out to me on <a class="link" target="_blank" rel="noopener noreferrer" href="https://twitter.com/mikeleeco">`;
  Icon($$payload, { class: "icon", name: "twitter" });
  $$payload.out += `<!----> Twitter</a></p> <p class="svelte-1c8ykc5">-Mike</p></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
