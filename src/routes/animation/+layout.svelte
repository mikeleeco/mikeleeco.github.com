<!-- Template for /projects, populated by +page.svelte -->
<script>
	import Seo from '$lib/Seo.svelte';

	let image = 'https://www.mikelee.co/img/michael.png';
	let title = 'Animation';
	let description = 'Some of my animations.';
</script>

<Seo {title} {description} {image} />

<slot />
