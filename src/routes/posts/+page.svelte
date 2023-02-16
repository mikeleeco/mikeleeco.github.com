<script>
  import Transition from "$lib/Transition.svelte";
  import PostSection from "$lib/Content/PostCompact.svelte";
  import PostDescription from "$lib/Content/PostDescription.svelte";
  import BackTo from "$lib/BackTo.svelte";

  import { windowWidth } from "../../stores/global.js";

  console.log($windowWidth);
  let pageWidth = 1000;
  $: pageWidth = $windowWidth < 468;
  let anyHovered;
  export let data;
  let posts = data.posts;

  let filteredPosts = posts.sort((a, b) => {
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
  <h1 class="page-title transition-title overflow-hidden">Blog</h1>
  <!-- <h3 class="page-description transition-title">Description</h3> -->
  <div class="posts-grid transition-content">
    {#each filteredPosts as post}
      <div>
        {#if !pageWidth}
          <PostDescription post={post.metadata} slug={post.slug} />
        {:else}
          <PostSection post={post.metadata} slug={post.slug} bind:anyHovered />
        {/if}
      </div>
    {/each}
  </div>
</main>

<style>
</style>
