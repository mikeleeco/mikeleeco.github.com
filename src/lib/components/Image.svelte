<script>
	let { alt, src, text, caption = true, visible = false, classNames = '' } = $props();

	let showCaption = $state(visible);
	function revealCaption() {
		visible = !visible;
	}
</script>

<button class="border-0" onclick={revealCaption} aria-labelledby="caption">
	<figure role="tooltip" class="flex flex-col ${caption ? ' py-5  first:pt-5 last:pb-5' : ''}">
		<img {src} {alt} class={classNames} />

		{#if visible & caption}
			<figcaption
				class="absolute w-full flex-1 bg-[--theme-color-background] p-3 opacity-[85%] lg:hidden"
			>
				<div class="theme-color-text p-2 opacity-100">{@html text}</div>
			</figcaption>
		{:else}
			<figcaption class="hidden sm:block">{@html text}</figcaption>
		{/if}
	</figure>
</button>
