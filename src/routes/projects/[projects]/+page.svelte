<!-- Skeleton for  -->
<script>
  import BackTo from "$lib/BackTo.svelte";
  import Seo from "$lib/Seo.svelte";

  export let data;
  let projects = data.projects;
  let { title, description, categories, img, url } = projects.metadata;
  let image = !img
    ? "https://www.mikelee.co/img/michael.png"
    : "https://www.mikelee.co" + img;

  // console.log(image);
</script>

<Seo {title} {description} {image} />

<article>
  <div class="flex flex-col gap-5">
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
  </div>
</article>
<div class="py-5">
  <BackTo
    href={`/${categories}`}
    text={`Back to all ${categories}`}
    classes="border-top"
  />
</div>
