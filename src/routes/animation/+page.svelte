<script>
	import Transition from '$lib/Transition.svelte';
	import PostSection from '$lib/Content/PostCompact.svelte';
	import PostDescription from '$lib/Content/PostDescription.svelte';
	import BackTo from '$lib/BackTo.svelte';
	import { windowWidth } from '../../stores/global.js';

	let anyHovered;

	let pageWidth;
	$: pageWidth = $windowWidth < 468;
	export let data;
	let animations = data.animations;
	let filteredAnimations = animations.sort((a, b) => {
		if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
		if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
	});
</script>

<Transition />

<main class="main">
	<BackTo href="/" text="Home" classes="page-heading transition-content centered" />
	<h1 class="page-title transition-title overflow-hidden">Animation</h1>

	<div class="animations-container main-content transition-content ">
		{#each filteredAnimations as post}
			<div>
				{#if !pageWidth}
					<PostDescription post={post.metadata} slug={post.slug} />
				{:else}
					<PostSection post={post.metadata} slug={post.slug} bind:anyHovered />
				{/if}
			</div>
		{/each}
	</div>
</main>

<style>
	.animations-container {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-gap: 10px;
		width: 100%;
		margin: auto;
		padding: 1rem;
		max-width: 1168px;
	}

	@media screen and (max-width: 568px) {
		.animations-container {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
