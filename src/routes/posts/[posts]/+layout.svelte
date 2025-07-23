<!-- Template for /posts/[slug], populated by +page.svelte -->
<script>
	import BackTo from '$lib/BackTo.svelte';
	import Seo from '$lib/Seo.svelte';

	let title;
	let description;
	let image = 'https://www.mikelee.co/img/michael.png';

	let element, intersecting;
</script>

<main>
	<div class="top-level" style="max-width: none;" bind:this={element}>
		<BackTo href="/posts" text="Blog" classes="page-heading" />
	</div>

	<div class="">
		<slot />
	</div>
</main>
