async function load({ fetch }) {
  const res = await fetch(`/animation.json`);
  const animations = await res.json();
  return {
    animations
  };
}
export {
  load
};
