<script>
  import Seo from "$lib/Seo.svelte";
  import Hero from "$lib/Sections/Hero.svelte";
  // import Game from "$lib/Sections/Game.svelte";
  import Blog from "$lib/Sections/Blog.svelte";
  import Projects from "$lib/Sections/Projects.svelte";

  export let data;
  let projects = data.projects;
  let posts = data.posts;
  let pageWidth;
  $: isMobile = pageWidth < 468;
</script>

<svelte:window bind:innerWidth={pageWidth} />
<Seo />
<main id="home">
  <Hero />
  <!-- <Game /> -->
  <Projects projects={data.projects} home={true} />
  <Blog posts={data.posts} {isMobile} home={true} />
  <Projects projects={data.animation} home={true} />
</main>

<style>
  main {
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    /* background-color: var(--primary-color); */
    z-index: 100; /* This is over the nav */
    position: relative;
  }
</style>
