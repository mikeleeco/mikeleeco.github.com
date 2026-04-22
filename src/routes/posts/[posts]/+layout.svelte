<!-- Template for /posts/[slug], populated by +page.svelte -->
<script>
	import BackTo from '$lib/BackTo.svelte';

	let element;
	let { children } = $props();
</script>

<main>
	<div class="top-level" style="max-width: none;" bind:this={element}>
		<BackTo href="/posts" text="Blog" classes="page-heading" />
	</div>

	<div class="">
		{@render children?.()}
	</div>
</main>
