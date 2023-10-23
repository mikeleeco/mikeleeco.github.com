<script>
  import { onMount, tick } from "svelte";
  import { theme } from "../stores/theme.js";
  import "../app.css";
  import Window from "$lib/Window.svelte";
  import Nav from "$lib/Nav/Nav.svelte";
  import ColorSwitcher from "$lib/ColorSwitcher.svelte";
  import Loading from "$lib//Loading.svelte";

  import "../styles/immutable.css";
  import "../styles/code.css";
  import "../styles/blog.css";
  import "../styles/slug.css";
  import "../styles/style.css";
  import Footer from "$lib/Footer.svelte";

  let mounted = false;
  onMount(() => {
    mounted = true;
    setColors($theme);
  });

  // This implements fade-in and out on the page level (smooth transitions)

  // When current page path changes, scroll to top (fixes https://github.com/sveltejs/kit/issues/2794)
  import { page } from "$app/stores";
  $: path = $page.url.pathname;
  $: path, scrollTop();

  async function scrollTop() {
    if (mounted) {
      await tick();
      document.scrollingElement.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  // THEME HANDLER
  const lightModeColors = [
    { var: `--pure-background-color`, value: `#f1f1f1` },
    { var: `--primary-color`, value: `#f1f1f1` },
    { var: `--primary-color-rgb`, value: `241, 241, 241` },
    { var: `--accent-color`, value: `#264C00` },
    { var: `--accent-color-rgb`, value: `38, 76, 0` },
    { var: `--heading-color`, value: `rgba(51, 51, 51, 0.7)` },
    { var: `--text-color`, value: `#1c1c1c` },
    { var: `--text-color-rgb`, value: `28, 28, 28` },
    { var: `--off-text-color`, value: `#3a3a3a` },
    { var: `--pure-text-color`, value: `#333333` },
    { var: `--background-without-opacity`, value: `rgba(241, 241, 241, 0.7)` },
    { var: `--box-shadow-color`, value: `rgba(51, 51, 51, 0.1)` },
    { var: `--works-on-accent-bg`, value: `var(--pure-background-color)` },
    { var: `--semitransparent-bg`, value: `rgba(38,76,0, 0.05)` },
    { var: `--footer-bg`, value: `var(--semitransparent-bg)` },
    { var: `--noise-opacity`, value: `.15` },
  ];

  const darkModeColors = [
    { var: `--pure-background-color`, value: `#333333` },
    { var: `--primary-color`, value: `rgb(22, 25, 26)` },
    { var: `--primary-color-rgb`, value: `22, 25, 26` },
    { var: `--accent-color`, value: `#80FF00` },
    { var: `--accent-color-rgb`, value: `128, 255, 0` },
    { var: `--heading-color`, value: `rgba(241, 241, 241, 1)` },
    { var: `--text-color`, value: `#f1f1f1` },
    { var: `--text-color-rgb`, value: `rgba(241, 241, 241, 1)` },
    { var: `--off-text-color`, value: `#e3e3e3` },
    { var: `--pure-text-color`, value: `#f1f1f1` },
    { var: `--background-without-opacity`, value: `rgba(51, 51, 51, 0.7)` },
    { var: `--box-shadow-color`, value: `rgba(51, 51, 51, 0.1)` },
    { var: `--works-on-accent-bg`, value: `var(--pure-background-color)` },
    { var: `--semitransparent-bg`, value: `rgba(241, 241, 241, 0.08)` },
    { var: `--footer-bg`, value: `var(--semitransparent-bg)` },
    { var: `--noise-opacity`, value: `.15` },
  ];

  function setColors(theme) {
    if (!mounted) return;
    if (theme == "dark") {
      darkModeColors.forEach((color) => {
        document.documentElement.style.setProperty(color.var, color.value);
      });
    } else {
      lightModeColors.forEach((color) => {
        document.documentElement.style.setProperty(color.var, color.value);
      });
    }
  }

  $: $theme, setColors($theme);
</script>

<Window />
<Nav />
<Loading />
<slot />

<Footer />
