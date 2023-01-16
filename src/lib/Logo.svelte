<script>
  import { windowWidth } from "../stores/global.js";
  import { theme } from "../stores/theme.js";
  export let comp;
  let transitionDuration = 500;
  let currentAccent;

  let pageWidth;
  $: pageWidth = $windowWidth < 468;

  import { cubicIn, cubicOut } from "svelte/easing";
</script>

<a class="post-img-{comp}" href="/">
  {#if $theme == "dark"}
    <img
      loading="lazy"
      src={"/images/icons/lee5light.png"}
      alt="Mike Lee Logo"
    />
  {:else}<img
      loading="lazy"
      src={"/images/icons/lee5.png"}
      alt="Mike Lee Logo"
    />
  {/if}
</a>

<style>
  .fullscreen-transition {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: grey;
    z-index: 10000;
  }

  .post-img-nav {
    background-color: inherit;
    position: absolute;
    width: 50px;
    margin-top: 20px;
    margin-right: 20px;
    right: 0;
  }
  .post-img-footer {
    background-color: inherit;
    position: absolute;
    width: 50px;
    margin-top: -10px;
    margin-left: 10px;
  }
  .post-img-inline {
    background-color: inherit;
    position: absolute;
    width: 50px;
  }
  @media screen and (max-width: 568px) {
    .post-img-nav {
      width: 50px;
      margin-right: 5px;
      margin-top: 20px;
      right: 0;
    }

    .post-img-footer {
      background-color: inherit;
      position: absolute;
      width: 60px;
      margin-left: 0px;
      margin-top: -25px;
    }

    .post-img-footer {
      background-color: inherit;
      position: absolute;
      width: 60px;
      margin-left: 0px;
      margin-top: -25px;
    }

    .post-img-inline {
      background-color: inherit;
      position: absolute;
      width: 50px;
    }
  }
</style>
