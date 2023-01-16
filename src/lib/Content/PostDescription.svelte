<script>
  /**
   * @type {{ categories: any; img: any; title: any; date: string | any[]; description: any; tags: any; }}
   */
  export let post;
  /**
   * @type {any}
   */
  export let slug;

  export let hovered = false;

  import TransitionInView from "$lib/TransitionInView.svelte";

  let active = false;
</script>

<TransitionInView>
  <div
    class="row post-card"
    on:mouseover={() => {
      active = true;
      hovered = true;
    }}
    on:focus={() => {
      active = true;
      hovered = true;
    }}
    on:mouseleave={() => {
      active = false;
      hovered = false;
    }}
    class:hovered
  >
    <a
      class="container  {hovered && !active
        ? 'inactive'
        : active
        ? 'active'
        : ''}"
      href={`${post.categories}/${slug}`}
    >
      <div class="column left">
        <img
          loading="lazy"
          src={post.img}
          alt="post img for {post.title}"
          class="post-img"
        />
      </div>
      <div class="column right">
        <time datetime={post.date} class="hidden-mobile"
          >{post.date.slice(0, 4)}</time
        >
        <h2 class="title">
          {post.title}
        </h2>
        <h3 class="description">
          {post.description}
        </h3>
        <div class="post-tags">
          {#each post.tags as tag}
            <span class="post-tag">{tag} </span>
          {/each}
        </div>
      </div>
    </a>
  </div>
</TransitionInView>

<style>
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .column {
    float: left;
  }

  .left {
    width: 20%;
  }

  .right {
    padding: 1rem;
    width: 75%;
  }

  .post-card {
    border-radius: 5px;
    box-shadow: 1px 1px 4px var(--box-shadow-color);
    height: 100%;
    padding: 1rem;
    cursor: pointer;
    display: block;
    border: 1px solid transparent;
  }

  .hovered {
    border: 1px solid var(--accent-color);
  }

  .title {
    flex: 1;
    font-size: 1.5rem;
    line-height: 1.15;
    font-family: var(--font-serif);
    letter-spacing: -0.4px;
    color: var(--text-color);
    font-weight: 600;
    line-height: 1.15;
  }

  .description {
    color: var(--pure-text-color);

    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.2;
    font-weight: 300;
    margin-top: 12px;
    letter-spacing: 0.64px;
  }

  .active > * {
    color: var(--accent-color);
  }

  .active {
    border-bottom-color: rgba(var(--text-color-rgb), 0.05);
  }

  .post-tags {
    padding: 0.5rem;
    text-align: right;
    flex-flow: row-reverse wrap;
    display: flex;
  }

  .post-tag {
    font-family: var(--font-sans);
    padding: 5px;
    background: rgba(var(--primary-color-rgb), 0.9);
    margin: 3px;
    border-radius: 3px;
    color: var(--text-color);
    font-size: 0.9rem;
    font-weight: 200;
    margin-right: 0.25rem;
    letter-spacing: 1px;
    border: 0.5px solid rgba(var(--accent-color-rgb), 0.7);
  }

  /* SMALL SCREENS */
  @media screen and (max-width: 700px) {
    .container {
      flex-direction: column;
      padding: 1rem 0;
      align-items: flex-start;
    }

    .title {
      margin-bottom: 0.35rem;
      color: var(--accent-color);
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.15;
    }

    time {
      padding: 0;
    }

    .hidden-mobile {
      display: none;
      visibility: hidden;
    }
  }
</style>
