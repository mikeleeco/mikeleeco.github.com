async function load({ fetch }) {
  const resProjects = await fetch(`/projects.json`);
  const projects = await resProjects.json();
  const resPosts = await fetch(`/posts.json`);
  const posts = await resPosts.json();
  const resAnimation = await fetch(`/animation.json`);
  const animation = await resAnimation.json();
  return {
    posts,
    projects,
    animation
  };
}
export {
  load
};
