<script>
  export let route;
  export let title;
  export let index;
  import { page } from "$app/stores";

  import { onMount } from "svelte";
</script>

<li>
  <a
    data-sveltekit-preload-data
    href="/{route}"
    class="overflow-hidden 
    link link-{index}"
  >
    {title}
  </a>
</li>

<style>
  li {
    display: inline-block;
    padding-top: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: var(--font-sans);
  }

  .link {
    color: var(--text-color);
    text-transform: uppercase;
    transition: color 600ms ease;
    display: block;
  }

  .link:hover {
    text-decoration: none;
  }

  .link:not(.active):hover {
    color: var(--text-color);
  }

  .active {
    color: var(--accent-color);
  }

  .active:hover {
    text-decoration: none;
  }

  .inactive {
    color: rgba(var(--text-color-rgb), 0.3);
  }

  .current-page {
    color: var(--accent-color);
  }

  @media screen and (max-width: 1068px) {
    li {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 528px) {
    .link {
      line-height: 0.9;
      font-size: 0.7rem;
    }
  }
</style>
