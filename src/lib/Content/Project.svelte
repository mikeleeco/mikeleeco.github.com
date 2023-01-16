<script>
  /**
   * @type {{ categories: any; img: any; title: any; date: string | any[]; description: any; tags: any; }}
   */
  export let project;
  /**
   * @type {any}
   */
  export let slug;
  import { fly } from "svelte/transition";

  let hovered = false;

  // Show titles by default on touch devices
  import { isTouchscreen } from "../../stores/device.js";
  import TransitionInView from "$lib/TransitionInView.svelte";
</script>

<TransitionInView>
  <a
    class="project-card no-underline"
    href={`${project.categories}/${slug}`}
    on:mouseover={() => {
      if ($isTouchscreen) return;
      hovered = true;
    }}
    on:focus={() => {
      if ($isTouchscreen) return;
      hovered = true;
    }}
    on:mouseleave={() => {
      hovered = false;
    }}
  >
    <img
      loading="lazy"
      src={project.img}
      alt="Project img for {project.title}"
      class="project-img"
      class:hovered
    />

    {#if hovered || $isTouchscreen & (project.categories !== "animation")}
      <div in:fly|local={{ y: 50, duration: 300 }} class="project-text">
        <h1 class="title">{@html project.title}</h1>
        <h2 class="description">{@html project.description}</h2>
      </div>
    {/if}
  </a>
</TransitionInView>

<style>
  .project-card {
    position: relative;
    border-radius: 5px;
    /* box-shadow: 1px 1px 4px var(--box-shadow-color); */
    height: 100%;
    cursor: pointer;
    display: block;
  }

  .project-img {
    width: 100%;
    height: 100%;
    min-height: 200px;
    object-fit: cover;
    border-radius: 5px;
    filter: blur(10);
    z-index: 0;
  }

  .hovered {
    filter: blur(1px);
  }

  .project-text {
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    padding: 1rem;
    z-index: 3;
    width: 100%;
    background-image: linear-gradient(
      to top,
      var(--pure-background-color) 95%,
      var(--accent-color, 0.9) 100%
    );
    border-right: 5px solid var(--accent-color);
    border-left: 5px solid var(--accent-color);
    border-bottom: 5px solid var(--accent-color);
    font-family: var(--font-serif);
  }

  .title {
    color: var(--accent-color);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.15;
  }

  .description {
    color: var(--pure-text-color);
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 400;
    margin-top: 12px;
    letter-spacing: 0.64px;
  }

  @media screen and (max-width: 768px) {
    .project-card {
      position: relative;
      border-radius: 0px;
      box-shadow: 1px 1px 4px var(--box-shadow-color);
      height: 100%;
      cursor: pointer;
      display: block;
    }

    .project-img {
      width: 100%;
    }

    .hovered {
      filter: blur(0px);
    }

    .project-text {
      position: absolute;
      bottom: 0;
      left: 0;
      pointer-events: none;
      padding: 1rem;
      z-index: 3;
      width: 100%;
    }

    .title {
      font-size: 1.1rem;
    }

    .description {
      font-size: 0.7rem;
      letter-spacing: 0.3px;
      margin-top: 6px;
    }
  }
</style>
