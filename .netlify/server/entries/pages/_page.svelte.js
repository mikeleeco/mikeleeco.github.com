import "clsx";
import { S as Seo } from "../../chunks/Seo.js";
import "../../chunks/global.js";
import "../../chunks/motion.js";
import "feather-icons";
/* empty css                                              */
import { S as bind_props, O as store_get, I as attr, G as attr_class, T as clsx, P as unsubscribe_stores } from "../../chunks/index.js";
import { t as theme, L as Logo } from "../../chunks/Logo.js";
function Brick($$payload, $$props) {
  const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  let { children } = $$props;
  $$payload.out += `<div class="flex flex-row p-5 justify-start items-center items-center justify-start gap-2 transition-transform duration-500 hover:scale-110 lg:flex-col lg:flex-col-reverse lg:text-center">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { directions });
}
function Drawing($$payload, $$props) {
  var $$store_subs;
  let { name, alt, classNames } = $$props;
  if (
    // $: pageWidth = $windowWidth < 468;
    store_get($$store_subs ??= {}, "$theme", theme) == "dark"
  ) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img loading="lazy"${attr("src", `/img/${name}Invert.png`)}${attr("alt", alt)}${attr_class(clsx(classNames))}/>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img loading="lazy"${attr("src", `/img/${name}.png`)}${attr("alt", alt)}${attr_class(clsx(classNames))}/>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function Hero($$payload) {
  $$payload.out += `<div class="grid grid-cols-1 place-items-center content-start gap-4 lg:w-full lg:grid-cols-3 lg:grid-rows-3"><div class="hidden lg:order-1 lg:block"></div> <div class="order-2"><a href="/apps">`;
  Brick($$payload, {
    children: ($$payload2) => {
      Drawing($$payload2, {
        alt: "Apps icon",
        name: "apps",
        classNames: "text-left w-1/2 lg:w-1/4 lg:self-center"
      });
      $$payload2.out += `<!----> <span class="text-left text-5xl">Apps</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a></div> <div class="hidden lg:order-3 lg:block"></div> <div class="order-4"><a href="/cartoons">`;
  Brick($$payload, {
    children: ($$payload2) => {
      Drawing($$payload2, {
        alt: "Cartoons icon",
        name: "cartoons",
        classNames: "w-1/2 lg:w-1/4 lg:self-center"
      });
      $$payload2.out += `<!----> <span class="text-left text-5xl">Cartoons</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a></div> <div class="hidden h-75 w-75 p-6 text-center text-white sm:flex xl:order-5">`;
  {
    $$payload.out += "<!--[-->";
    Logo($$payload);
  }
  $$payload.out += `<!--]--></div> <div class="order-6"><a href="/posts">`;
  Brick($$payload, {
    children: ($$payload2) => {
      Drawing($$payload2, {
        alt: "Posts icon",
        name: "posts",
        classNames: "w-1/2 lg:w-1/4 lg:self-center"
      });
      $$payload2.out += `<!----> <span class="text-left text-5xl">Posts</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a></div> <div class="hidden lg:order-7 lg:block"></div> <div class="order-8"><a href="/about">`;
  Brick($$payload, {
    children: ($$payload2) => {
      Drawing($$payload2, {
        alt: "About icon",
        name: "about",
        classNames: "w-1/2 lg:w-1/4 lg:self-center"
      });
      $$payload2.out += `<!----> <span class="text-left text-5xl">About</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></a></div> <div class="hidden lg:order-9 lg:block"></div></div>`;
}
function _page($$payload) {
  Seo($$payload, {});
  $$payload.out += `<!----> <div class="min-h-screen">`;
  Hero($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
