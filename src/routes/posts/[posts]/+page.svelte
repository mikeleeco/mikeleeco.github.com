<!-- Skeleton for  -->
<script>
	import BackTo from '$lib/BackTo.svelte';
	import Seo from '$lib/Seo.svelte';

	let { data } = $props();
	let { title, description, categories, img, tags } = data.posts.metadata;
	let image = !img ? 'https://www.mikelee.co/img/michael.png' : 'https://www.mikelee.co' + img;
	let keywords = tags;
	// console.log(image);
</script>

<Seo {title} {description} {image} {keywords} />

<article>
	<div class="flex flex-col gap-5">
		<h3 class="page-title overflow-hidden">{title}</h3>
		<h4 class="page-subtitle">{description}</h4>
		<svelte:component this={data.posts.default} />
	</div>
</article>
<div>
	<BackTo href={`/${categories}`} text={`Back to all ${categories}`} classes="border-top" />
</div>
