<script>
  import { onMount } from "svelte";
  import { windowHeight, windowWidth } from "../../stores/global.js";
  import { prefersReducedMotion } from "../../stores/motion.js";
  import { sleep } from "../../scripts/utils.js";
  import Icon from "$lib/components/Icon.svelte";

  let sectionHeight = $windowHeight;

  let pageWidth = $windowWidth > 768;

  let scrollToGame = () => window.scrollTo(0, $windowHeight * 1);
  let unclicked = true;
  const jumpToGame = () => {
    unclicked = false;
    scrollToGame();
  };
</script>

<section id="hero">
  <div class="hero-content">
    <div class="hero-content-box ">
      <div class="top">
        <p class="top">
          Hi! I'm <span class="mike">Mike Lee</span>. I develop websites <Icon
            color="var(--accent-color)"
            name="code"
          />, visualizations <Icon
            color="var(--accent-color)"
            name="bar-chart"
          />, and anyalytical tools <Icon
            color="var(--accent-color)"
            name="database"
          />
        </p>
      </div>
    </div>
    <!-- <p in:fly={{ y: 30 }} class="chevron" class:unclicked on:click={jumpToGame}>projects</p> -->
    <div class="hero-content-box">
      <p class="middle">
        Check out my <a class="" href="/projects">projects</a> page to learn a
        little more details about my experience or check out the code for this
        portfolio at
        <a class="" href="https://github.com/mikeleeco/mikeleeco.github.com"
          >this github</a
        >
      </p>
    </div>
    <div class="hero-content-box">
      <p class="bottom">
        Before you go be sure to take a <button
          class="chevron"
          class:unclicked
          on:click={jumpToGame}>tour around</button
        >, send me an

        <a
          href="mailto:mdlee12@gmail.com?subject=Message to Mike Lee from mikelee.co"
          >email</a
        >, or follow me on
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/intent/follow?screen_name=mikeleeco"
          ><Icon name="twitter" /> Twitter</a
        >
      </p>
    </div>
    <div class="hero-content-box-chevron" />
    <button class="chevron" class:unclicked on:click={jumpToGame}>
      <Icon name="chevron-down" />
    </button>
  </div>
</section>

<style>
  #hero {
    margin: 1rem;
    font-family: var(--font-sans);
    height: 90vh;

    margin-left: 20%;
    margin-right: 20%;
  }
  .mike {
    font-family: var(--font-serif);
    font-weight: 400;
    color: var(--accent-color);
  }
  .hero-content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .hero-content-box {
    margin-top: auto;
  }
  .top {
    font-size: 4rem;
  }

  .hero-content-box-chevron {
    align-items: center;
    margin-top: auto;
    justify-content: center;
    font-size: 3rem;
  }

  @media screen and (max-width: 768px) {
    #hero {
      margin-left: 2%;
      margin-right: 2%;
    }
  }
  .top {
    font-size: 2rem;
  }

  @media screen and (max-width: 468px) {
    section {
      place-items: center;
    }
  }
</style>
