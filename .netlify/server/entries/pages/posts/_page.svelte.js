import { F as ensure_array_like, E as pop, A as push } from "../../../chunks/index.js";
import { T as Transition } from "../../../chunks/Transition.js";
import { P as PostCompact } from "../../../chunks/PostCompact.js";
import { B as BackTo } from "../../../chunks/BackTo.js";
import { C as ContainerLayout } from "../../../chunks/ContainerLayout.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let posts = data.posts;
  let recentPosts = posts.filter((b) => {
    if (Date.parse(b.metadata.date) > Date.parse("2020-06-10")) return 1;
    else return null;
  });
  let featuredPosts = posts.filter((d) => d.metadata.featured == true).sort((a, b) => {
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });
  Transition($$payload, {});
  $$payload.out += `<!----> `;
  ContainerLayout($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(recentPosts);
      const each_array_1 = ensure_array_like(featuredPosts);
      $$payload2.out += `<div class="flex flex-col justify-center">`;
      BackTo($$payload2, { href: "/", text: "Home", classes: "heading" });
      $$payload2.out += `<!----> <h1>Posts</h1> <div class="flex flex-col gap-10"><div><h2>Recent Posts</h2> <!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let post = each_array[$$index];
        $$payload2.out += `<div>`;
        PostCompact($$payload2, { post: post.metadata, slug: post.slug });
        $$payload2.out += `<!----></div>`;
      }
      $$payload2.out += `<!--]--></div> <div><h2>Featured Posts</h2> <div><!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let post = each_array_1[$$index_1];
        $$payload2.out += `<div>`;
        PostCompact($$payload2, { post: post.metadata, slug: post.slug });
        $$payload2.out += `<!----></div>`;
      }
      $$payload2.out += `<!--]--></div></div></div></div>`;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
