import { F as ensure_array_like, I as attr, J as escape_html, K as stringify, S as bind_props, E as pop, A as push } from "./index.js";
import { format, parseISO } from "date-fns";
function PostCompact($$payload, $$props) {
  push();
  let post = $$props["post"];
  let slug = $$props["slug"];
  const each_array = ensure_array_like(post.tags);
  $$payload.out += `<a class="hover:underline"${attr("href", `${post.categories}/${slug}`)}><div class="hover:border-red flex flex-row gap-2 border-2 border-transparent text-[var(--theme-color-text)]"><span>${escape_html(format(parseISO(post.date), "yyyy"))}</span> <div class="image hidden w-1/8 place-self-center sm:block"><img loading="lazy"${attr("src", post.img)}${attr("alt", `Project img for ${stringify(post.title)}`)} class="post-img"/></div> <span class="title w-2/5 text-sm">${escape_html(post.title)}</span> <span class="description w-2/5 text-xs sm:text-sm">${escape_html(post.description)}</span> <div class="sm:w-1/8"><div class="hidden flex-row gap-1 sm:flex"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<span class="border-accent flex rounded-md border-1 p-1 text-xs">${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div></div></div></a>`;
  bind_props($$props, { post, slug });
  pop();
}
export {
  PostCompact as P
};
