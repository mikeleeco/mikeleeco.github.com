<!-- Template for /projects/[slug], populated by +page.svelte -->
<script>
  import BackTo from "$lib/BackTo.svelte";
  import Seo from "$lib/Seo.svelte";

  let title;
  let description;
  let image = "https://www.mikelee.co/img/michael.png";

  import IntersectionObserver from "svelte-intersection-observer";
  let element, intersecting;
</script>

<Seo {title} {description} {image} />

<main>
  <IntersectionObserver {element} bind:intersecting rootMargin="-60px">
    <div class="top-level" style="max-width: none;" bind:this={element}>
      <BackTo href="/projects" text="Projects" classes="page-heading" />
    </div>
  </IntersectionObserver>
  <div class="slug main-content">
    <slot />
  </div>
</main>
