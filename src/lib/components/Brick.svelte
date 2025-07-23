<script>
	export const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
	let { children } = $props();
</script>

<div
	class="flex flex-row p-5 justify-start items-center items-center justify-start gap-2 transition-transform duration-500 hover:scale-110 lg:flex-col lg:flex-col-reverse lg:text-center"
>
	{@render children?.()}
</div>

<style>
</style>
