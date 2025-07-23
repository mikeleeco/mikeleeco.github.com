import "clsx";
function ContainerLayout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="max-w-6xl mx-auto p-5 sm:px-5 md:px-20">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  ContainerLayout as C
};
