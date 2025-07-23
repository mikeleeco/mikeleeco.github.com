import { Q as fallback, S as bind_props, E as pop, A as push } from "./index.js";
import { SplitText } from "gsap/dist/SplitText.js";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin.js";
import "./global.js";
import "./motion.js";
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, MorphSVGPlugin);
}
function Transition($$payload, $$props) {
  push();
  let split = fallback($$props["split"], "chars");
  let stagger = fallback($$props["stagger"], 0.02);
  let startingOpacity = fallback($$props["startingOpacity"], 0);
  gsap.registerPlugin(SplitText);
  bind_props($$props, { split, stagger, startingOpacity });
  pop();
}
export {
  Transition as T
};
