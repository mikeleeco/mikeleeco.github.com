<script>
	import Seo from '$lib/Seo.svelte';

	let image = 'https://www.mikelee.co/img/michael.png';
</script>

<Seo title={`Resume | Michael Lee`} description={`Resume`} {image} />

<slot />
