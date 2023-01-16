<script>
  import Icon from "$lib/components/Icon.svelte";
  import Logo from "$lib/Logo.svelte";
</script>

<footer>
  <div class="flex-container">
    <div class="row left">
      <Logo comp="footer" />
    </div>
    <div class="row right">
      <div class="row-content">
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mikeleeco/"
          ><Icon name="linkedin" />LinkedIn</a
        >
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mikeleeco/"><Icon name="github" />GitHub</a
        >
        <a
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/intent/follow?screen_name=mikeleeco"
          ><Icon name="twitter" />Twitter</a
        >
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    /* display: flex; */
    place-items: center;
    height: 100px;
    background: var(--footer-bg);
    color: var(--pure-text-color);
    border-top: var(--accent-color);
    border-style: solid;
      border-width: medium;
    position: relative;
    z-index: 99;
    box-shadow: -1px -1px 6px var(--box-shadow-color);
    transition: height 300ms ease;
  }

  .flex-container {
    display: flex;
    max-width: 1268px;
    width: 100%;
    margin: auto;
    flex-direction: row;
    /* margin: 2rem; */
    display: flex;
    justify-content: right;
    place-items: center;
  }

  .row {
    margin-left: 10%;
    margin-right: 10%;
  }

  .right {
    display: flex;
    flex-direction: row;
    padding: 1rem;
  }

  .left,
  .right {
    flex: 1;
  }

  .left {
    text-align: left;
  }

  .link {
    color: var(--pure-text-color);
    font-family: var(--font-sans);
    margin: 0.5rem;
    padding-bottom: 0rem;
    font-weight: 200;
    font-size: 1rem;
    letter-spacing: 0.025rem;
  }
</style>
