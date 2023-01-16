<script>
  export let posts;
  export let home;
  export let isMobile;

  import IntersectionObserver from "svelte-intersection-observer";

  import PostSection from "$lib/Content/PostCompact.svelte";
  import PostDescription from "$lib/Content/PostDescription.svelte";

  let element;
  let intersecting;

  // Sort by featured first, and if featured is the same (both false), then sort by date
  let filteredPosts = posts
    .filter((d) => (d.metadata.featured == true) & (home == true))
    // Sort by featured first, and if featured is the same (both false), then sort by date
    .sort((a, b) => {
      if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
      if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
    });

  let anyHovered;
</script>

<IntersectionObserver {element} bind:intersecting>
  <section bind:this={element} id="posts">
    <div class="see-all-flex">
      <h1 class="page-overline">
        {""}
      </h1>
      <a
        class="page-overline padding-bottom see-all"
        data-sveltekit-prefetch
        href="/posts">See all posts &#8599;</a
      >
    </div>
    <!-- <SectionTitle {intersecting} element="#posts-title"> -->
    <h1 id="section-title" class="section-title overflow-hidden">
      Featured
      <span class="gradient-accented bolded ">posts</span>
    </h1>
    <!-- </SectionTitle> -->

    <div class="posts-grid">
      {#each filteredPosts as post}
        <div>
          {#if !isMobile}
            <PostDescription post={post.metadata} slug={post.slug} />
          {:else}
            <PostSection
              post={post.metadata}
              slug={post.slug}
              bind:anyHovered
            />
          {/if}
        </div>
      {/each}
    </div>
  </section>
</IntersectionObserver>

<style>
  section {
    width: 95%;
    max-width: 1168px;
    margin: auto;
    margin-bottom: var(--section-margin-bottom);
  }
</style>
