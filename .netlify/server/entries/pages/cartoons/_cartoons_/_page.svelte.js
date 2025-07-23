import { V as head, I as attr, J as escape_html, E as pop, A as push } from "../../../../chunks/index.js";
import { B as BackTo } from "../../../../chunks/BackTo.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { r as replaceJpeg, c as cartoons } from "../../../../chunks/utils.js";
import "../../../../chunks/client.js";
import { format, parseISO } from "date-fns";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let image = data.image;
  let index = data.index;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(replaceJpeg(image.Filename))}</title>`;
  });
  Seo($$payload, {
    title: `Cartoon - ${replaceJpeg(image.Filename).toUpperCase()}`,
    description: image.Caption,
    keywords: image.tags
  });
  $$payload.out += `<!----> <div class="flex flex-col"><div>`;
  BackTo($$payload, { href: `/cartoons`, text: `Back to all cartoons`, classes: "" });
  $$payload.out += `<!----></div> <div class="flex flex-row place-content-between gap-5 pb-5">`;
  if (index !== cartoons.length - 1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button aria-label="button-forward" class="button mx-auto h-full w-20 self-center" type="submit">&lt;</button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button aria-label="button-forward-spacing" class="button invisible mx-auto h-full w-20"></button>`;
  }
  $$payload.out += `<!--]--> <div class="mx-auto flex max-w-5xl flex-col gap-10 py-8"><div class="flex flex-col"><img${attr("src", `/img/cartoons/${image.Filename}`)}${attr("alt", image.Description)} class="max-w-full lg:max-h-full"/> `;
  if (image.Caption) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="p-1 text-center font-serif text-lg italic sm:p-5 md:p-10 md:text-2xl">"${escape_html(image.Caption)}"</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="flex flex-col"><p><strong>Date:</strong> ${escape_html(format(parseISO(image.Date), "LLLL, y"))}</p> <p><strong>Tags:</strong> ${escape_html(Array.isArray(image.tags) ? image.tags.join(", ") : image.tags)}</p> <strong>${escape_html(index + 1)}/${escape_html(cartoons.length)}</strong></div></div> `;
  if (index !== 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button aria-label="button-back" class="button mx-auto h-full w-20 self-center" type="submit">></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button aria-label="button-back-spacing" class="button invisible mx-auto h-full w-20"></button>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
