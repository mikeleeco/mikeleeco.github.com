<script>
	import { fade } from 'svelte/transition';
	import { pageTransitionDelay } from '../stores/global.js';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// When page loads, trigger page transition
	onMount(() => {
		if ($page.url.pathname != '/') initTransition();
	});

	let transitioning = false;

	let initTransition = function () {
		let transitionDur = $page.url.pathname == '/' ? 0 : $pageTransitionDelay;
		transitioning = true;

		setTimeout(() => {
			transitioning = false;
		}, transitionDur);
	};
</script>

{#if transitioning}
	<div in:fade={{ duration: 0 }} out:fade={{ duration: 600 }} class="fullscreen-loading"></div>
{/if}

<style>
	.fullscreen-loading {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background: var(--theme-color-background);
		z-index: 100;
		/* cursor: none; */
	}
</style>
