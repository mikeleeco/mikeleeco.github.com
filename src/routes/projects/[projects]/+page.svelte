<!-- Skeleton for  -->
<script>
  import BackTo from "$lib/BackTo.svelte";
  import Seo from "$lib/Seo.svelte";

  export let data;
  let projects = data.projects;
  let { title, description, categories, img, url } = projects.metadata;
  let image = !img ? "https://www.mikelee.co/img/michael.png" : img;
</script>

<Seo {title} {description} {image} />

<article>
  <h2 class="page-title">{title}</h2>
  <h3 class="page-subtitle">{description}</h3>

  {#if url === ""}
    <img
      loading="lazy"
      src={img}
      alt="Project img for {title}"
      class="post-img"
    />
  {:else}
    <a class="no-underline" href={url}>
      <img
        loading="lazy"
        src={img}
        alt="Project img for {title}"
        class="post-img"
      />
    </a>
    <a class="" href={url}> {url}</a>
  {/if}

  <svelte:component this={projects.default} />
</article>
<div>
  <BackTo
    href={`/${categories}`}
    text={`Back to all ${categories}`}
    classes="border-top"
  />
</div>
