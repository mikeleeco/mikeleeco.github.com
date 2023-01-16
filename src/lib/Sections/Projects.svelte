<script>
  export let projects;
  export let home;
  import Transition from "$lib/Transition.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import ProjectSection from "$lib/Content/Project.svelte";

  import { windowWidth } from "../../stores/global.js";

  let element;
  let intersecting;

  // Sort by featured first, and if featured is the same (both false), then sort by date
  let filteredProjects = projects
    .filter((d) => (d.metadata.featured == true) & (home == true))
    // Sort by featured first, and if featured is the same (both false), then sort by date
    .sort((a, b) => {
      if (b.metadata.featured && !a.metadata.featured) return 1;
      if (!b.metadata.featured && a.metadata.featured) return -1;
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  // $: filteredProjects = isMobile ? projects.filter((d) => d.metadata.featured) : projects;
  export let slug = filteredProjects[0].metadata.categories;

  let anyHovered;
</script>

<Transition split={"words"} stagger={0.07} />

<IntersectionObserver {element} bind:intersecting once>
  <section bind:this={element} id="projects">
    <div class="see-all-flex">
      <h1 class="page-overline">
        {""}
      </h1>
      <a
        class="page-overline padding-bottom see-all"
        data-sveltekit-prefetch
        href={`/${slug}`}>See all {slug} &#8599;</a
      >
    </div>
    <!-- <SectionTitle {intersecting} element="#projects-title"> -->
    <h1 id="section-title" class="section-title overflow-hidden">
      Featured
      <span class="gradient-accented bolded ">{slug}</span>
    </h1>
    <!-- </SectionTitle> -->

    <div class="projects-container main-content transition-content ">
      {#each filteredProjects as project}
        <div class="projects-overlay">
          <ProjectSection
            project={project.metadata}
            slug={project.slug}
            bind:anyHovered
          />
        </div>
      {/each}
    </div>
  </section>
</IntersectionObserver>

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
  section {
    width: 95%;
    max-width: 1168px;
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
  }
</style>
