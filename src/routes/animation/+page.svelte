<script>
	// import Transition from '$lib/Transition.svelte';
	import Post from '$lib/Content/PostCompact.svelte';
	import BackTo from '$lib/BackTo.svelte';
	import { windowWidth } from '../../stores/global.js';

	let pageWidth;
	$: pageWidth = $windowWidth < 468;
	export let data;
	let animations = data.animations;
	let filteredAnimations = animations.sort((a, b) => {
		if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
		if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
	});
</script>

<main class="main">
	<BackTo href="/" text="Home" classes="page-heading" />
	<h1 class="">Animation</h1>

	<div class="">
		{#each filteredAnimations as post}
			<div>
				<Post post={post.metadata} slug={post.slug} />
			</div>
		{/each}
	</div>
</main>
