<script>
	import { windowWidth } from '../../stores/global.js';
	import { theme } from '../../stores/theme.js';
	let transitionDuration = 500;
	let currentAccent;
	let { name, alt, classNames } = $props();
	let pageWidth;
	// $: pageWidth = $windowWidth < 468;

	import { cubicIn, cubicOut } from 'svelte/easing';
</script>

{#if $theme == 'dark'}
	<img loading="lazy" src={`/img/${name}Invert.png`} {alt} class={classNames} />
{:else}<img loading="lazy" src={`/img/${name}.png`} {alt} class={classNames} />
{/if}

<style>
</style>
