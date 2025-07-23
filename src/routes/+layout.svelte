<script>
	import '../app.css';
	import ColorSwitcher from '$lib/ColorSwitcher.svelte';

	import '../styles/code.css';
	import Footer from '$lib/Footer.svelte';
</script>

<!-- <Nav /> -->
<!-- <Loading /> -->
<main class="text-[var(--theme-color-text]) bg-[var(--theme-color-background)]">
	<ColorSwitcher />

	<slot />
</main>
<Footer />
