<script>
  export let styles = "";
  export let hasBackground = false;
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
  import Logo from "$lib/Logo.svelte";

  import NavListItem from "./NavListItem.svelte";

  let mounted = false;

  import { onMount } from "svelte";

  onMount(() => {
    mounted = true;
  });
</script>

<div style={styles} class:hasBackground>
  <ColorSwitcher />
  <Logo comp={"nav"} />
</div>
<!-- {#if expanded} -->
<div class="nav" style={styles}>
  <ul class="nav-items">
    <NavListItem route={"projects"} title={"Projects"} index={1} />
    <NavListItem route={"animation"} title={"Animation"} index={2} />
    <NavListItem route={"posts"} title={"Blog"} index={3} />
    <NavListItem route={"resume"} title={"Resume"} index={4} />
  </ul>
</div>

<!-- {/if} -->
<style>
  /* TOP LEVEL NAV (when fullpage is invisible) */

  /* FULLPAGE NAV */
  .nav {
    display: flex;
    justify-content: center;
  }

  .nav-items {
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }

  /* On small screens, put a background behind nav to prevent text overlap */
  @media screen and (max-width: 868px) {
    .hasBackground {
      background: var(--primary-color);
      /* box-shadow: 1px 1px 6px var(--box-shadow-color); */
    }
  }

  @media screen and (max-width: 560px) {
  }

  @media screen and (max-width: 460px) {
  }

  :global(.disable-scroll, .disable-scroll body) {
    touch-action: none;
    -webkit-overflow-scrolling: none;
    overflow: hidden;
    overscroll-behavior: none;
  }

  /* This prevents jumping on menu open, while the above prevents scrolling */
  :global(.disable-scroll body) {
    overflow-y: scroll;
  }

  @media screen and (max-width: 868px) {
    .nav {
      padding-left: 0;
    }
    ul {
      text-align: center;
    }
  }
</style>
