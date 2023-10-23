<!-- Skeleton for  -->
<script>
	import BackTo from "$lib/BackTo.svelte";
	import Seo from "$lib/Seo.svelte";

	export let data;
	let posts = data.posts;
	let { title, description, categories, img } = posts.metadata;
	let image = !img ? "https://www.mikelee.co/img/michael.png" : img;
</script>

<Seo {title} {description} {image} />

<article>
	<h3 class="page-title overflow-hidden">{title}</h3>
	<h4 class="page-subtitle">{description}</h4>
	<svelte:component this={posts.default} />
</article>
<div>
	<BackTo
		href={`/${categories}`}
		text={`Back to all ${categories}`}
		classes="border-top"
	/>
</div>
