import { F as ensure_array_like, G as attr_class, I as attr, J as escape_html, K as stringify, E as pop, A as push, M as slot } from "../../chunks/index.js";
import "clsx";
import { I as Icon } from "../../chunks/Icon.js";
import { L as Logo } from "../../chunks/Logo.js";
function ColorSwitcher($$payload, $$props) {
  push();
  let themes = [
    { title: "🌚  Dark", theme: "dark" },
    { title: "🌝  Light", theme: "light" }
  ];
  let selectedTheme = void 0;
  $$payload.out += `<!---->`;
  {
    const each_array = ensure_array_like(themes);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let i = each_array[$$index];
      $$payload.out += `<button${attr_class(`button-icon ${stringify(selectedTheme === i.theme ? "border-accent cursor-pointer border-2" : "border-2 border-transparent")}`)}${attr("data-set-theme", i.theme)} type="button">${escape_html(i.title)}</button>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!---->`;
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer class="mt-10 border-y-2 border-[var(--theme-color-accent)] p-10"><div class="flex place-content-between"><div class="square w-12">`;
  Logo($$payload);
  $$payload.out += `<!----></div> <div class="flex"><div class="grid grid-cols-2 flex-col gap-5 sm:grid-cols-4"><a class="link flex flex-row gap-1" target="_blank" aria-label="footer-link" rel="noopener noreferrer" href="https://www.linkedin.com/in/mikeleeco/">`;
  Icon($$payload, { name: "linkedin" });
  $$payload.out += `<!---->LinkedIn</a> <a class="link flex flex-row gap-1" target="_blank" rel="noopener noreferrer" href="https://github.com/mikeleeco/">`;
  Icon($$payload, { name: "github" });
  $$payload.out += `<!---->GitHub</a> <a class="link flex flex-row gap-1" target="_blank" aria-label="footer-link" rel="noopener noreferrer" href="https://www.instagram.com/mikeleeco"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:var(--theme-color-accent)" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg>Instagram</a> <a class="link flex flex-row gap-1" target="_blank" aria-label="footer-link" rel="noopener noreferrer" href="https://bsky.app/profile/mikelee.co"><svg width="24" height="24" style="fill:var(--theme-color-accent)" viewBox="0 0 600 530" xmlns="http://www.w3.org/2000/svg"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"></path></svg> Blue Sky</a></div></div></div></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<main class="text-[var(--theme-color-text]) bg-[var(--theme-color-background)]">`;
  ColorSwitcher($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
