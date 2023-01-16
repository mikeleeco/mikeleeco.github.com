<script>
  import Transition from "$lib/Transition.svelte";
  import ProjectSection from "$lib/Content/Project.svelte";
  import BackTo from "$lib/BackTo.svelte";

  export let data;
  let projects = data.projects;

  let filteredProjects = projects.sort((a, b) => {
    if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
    if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
  });
</script>

<Transition />

<main class="main">
  <BackTo
    href="/"
    text="Home"
    classes="page-heading transition-content centered"
  />
  <h1 class="page-title transition-title overflow-hidden">Projects</h1>

  <div class="projects-container main-content transition-content ">
    {#each filteredProjects as project}
      <div class="projects-overlay">
        <ProjectSection project={project.metadata} slug={project.slug} />
      </div>
    {/each}
  </div>
</main>

<style>
  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    width: 100%;
    margin: auto;
    padding: 1rem;
    max-width: 1168px;
  }

  @media screen and (max-width: 568px) {
    .projects-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
