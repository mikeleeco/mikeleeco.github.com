<script>
	let { children } = $props();
	// export let image;
</script>

<div class="max-w-6xl mx-auto p-5 sm:px-5 md:px-20">
	{@render children?.()}
</div>
