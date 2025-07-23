<!-- Template for /projects, populated by +page.svelte -->
<script>
	import Seo from '$lib/Seo.svelte';

	let image = 'https://www.mikelee.co/img/michael.png';
	let title = 'Blog';
	let description = 'Some of my posts.';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
</script>

<Seo {title} {description} {image} />

<ContainerLayout>
	<slot />
</ContainerLayout>
