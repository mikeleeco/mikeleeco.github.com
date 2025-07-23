<script>
	import { windowWidth } from '../stores/global.js';
	import { theme } from '../stores/theme.js';
	let transitionDuration = 500;
	let currentAccent;

	let pageWidth;
	$: pageWidth = $windowWidth < 468;

	import { cubicIn, cubicOut } from 'svelte/easing';
</script>

<a class="post-img" href="/">
	{#if $theme == 'dark'}
		<img loading="lazy" src={'/images/icons/logoInvert.png'} alt="Mike Lee Logo" />
	{:else}<img loading="lazy" src={'/images/icons/logo.png'} alt="Mike Lee Logo" />
	{/if}
</a>

<style>
</style>
