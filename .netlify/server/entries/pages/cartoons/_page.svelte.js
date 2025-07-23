import { F as ensure_array_like, U as maybe_selected, I as attr, J as escape_html, E as pop, A as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { C as ContainerLayout } from "../../../chunks/ContainerLayout.js";
import { c as cartoons, r as replaceJpeg } from "../../../chunks/utils.js";
import { B as BackTo } from "../../../chunks/BackTo.js";
function _page($$payload, $$props) {
  push();
  let selectedTag = "Aliens";
  let images = cartoons;
  const tags = Array.from(new Set(cartoons.flatMap((img) => img.tags))).sort();
  let filtered = images.filter((img) => img.tags.includes(selectedTag));
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomFloat = getRandomIntInclusive(0, cartoons.length);
  cartoons[randomFloat];
  Seo($$payload, { title: "Cartoons" });
  $$payload.out += `<!----> `;
  ContainerLayout($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(tags);
      const each_array_1 = ensure_array_like(filtered);
      $$payload2.out += `<div class="flex flex-col"><div>`;
      BackTo($$payload2, { href: `/`, text: `Home`, classes: "" });
      $$payload2.out += `<!----></div> <div class="grid gap-5"><h1>Cartoons</h1> <div><button class="button">Latest</button> <button class="button">Oldest</button> <button class="button">Random</button></div> <select class="mb-4 border p-2">`;
      $$payload2.select_value = selectedTag;
      $$payload2.out += `<option value=""${maybe_selected($$payload2, "")}>All Tags</option><!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$payload2.out += `<option${attr("value", tag)}${maybe_selected($$payload2, tag)}>${escape_html(tag)}</option>`;
      }
      $$payload2.out += `<!--]-->`;
      $$payload2.select_value = void 0;
      $$payload2.out += `</select> Search cartoons by tag: ${escape_html(selectedTag)} <div class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2"><!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let image = each_array_1[$$index_1];
        $$payload2.out += `<a${attr("href", `/cartoons/${replaceJpeg(image.Filename)}`)} class="block h-auto w-full content-center border object-contain p-4 hover:shadow lg:h-90"><img${attr("src", `/img/cartoons/${image.Filename}`)}${attr("alt", image.Description)} class="lg:max-h-auto max-w-full"/></a>`;
      }
      $$payload2.out += `<!--]--></div></div></div>`;
    }
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
