<script>
	export const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
	let { children, url } = $props();
</script>

<a href={url} class="flex lg:flex-row items gap-5 items-center text-center">
	{@render children?.()}
</a>

<style>
</style>
