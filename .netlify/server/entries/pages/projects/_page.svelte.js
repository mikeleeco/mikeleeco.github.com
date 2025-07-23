import { F as ensure_array_like, E as pop, A as push } from "../../../chunks/index.js";
import { T as Transition } from "../../../chunks/Transition.js";
import { P as PostCompact } from "../../../chunks/PostCompact.js";
import { B as BackTo } from "../../../chunks/BackTo.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let projects = data.projects;
  let filteredProjects = projects.sort((a, b) => {
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });
  const each_array = ensure_array_like(filteredProjects);
  Transition($$payload, {});
  $$payload.out += `<!----> <main class="main">`;
  BackTo($$payload, { href: "/", text: "Home", classes: "" });
  $$payload.out += `<!----> <h1>Projects</h1> <div><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    $$payload.out += `<div class="projects-overlay">`;
    PostCompact($$payload, { post: project.metadata, slug: project.slug });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  pop();
}
export {
  _page as default
};
