import { Q as fallback, R as spread_attributes, S as bind_props, E as pop, A as push, K as stringify } from "./index.js";
import feather from "feather-icons";
/* empty css                                   */
import { h as html } from "./html.js";
function Icon($$payload, $$props) {
  push();
  let icon, rotation;
  const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  let name = $$props["name"];
  let direction = fallback($$props["direction"], "n");
  let width = fallback($$props["width"], "1em");
  let height = fallback($$props["height"], "1em");
  let color = fallback($$props["color"], void 0);
  let backgroundColor = fallback($$props["backgroundColor"], void 0);
  let stroke = fallback($$props["stroke"], void 0);
  let strokeWidth = fallback($$props["strokeWidth"], void 0);
  icon = feather.icons[name];
  rotation = directions.indexOf(direction) * 45;
  if (icon) {
    if (stroke) icon.attrs["stroke"] = stroke;
    if (strokeWidth) icon.attrs["stroke-width"] = strokeWidth;
  }
  if (icon) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<svg${spread_attributes(
      {
        ...icon.attrs,
        style: `width: ${stringify(width)}; color: ${stringify(color)}; vertical-align: middle; background-color: ${stringify(backgroundColor)}; height: ${stringify(height)}; transform: rotate(${stringify(rotation)}deg);`
      },
      "svelte-1keljnz",
      void 0,
      void 0,
      3
    )}><g>${html(icon.contents)}</g></svg>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    name,
    direction,
    width,
    height,
    color,
    backgroundColor,
    stroke,
    strokeWidth,
    directions
  });
  pop();
}
export {
  Icon as I
};
