<!-- Skeleton for  -->
<script>
	import BackTo from "$lib/BackTo.svelte";
	import Seo from "$lib/Seo.svelte";

	export let data;
	let animation = data.animation;
	let { title, description, categories, img } = animation.metadata;
	let image = !img
		? "https://www.mikelee.co/img/michael.png"
		: "https://www.mikelee.co" + img;
</script>

<Seo {title} {description} {image} />

<article>
	<h3 class="page-title overflow-hidden">{title}</h3>
	<h4 class="page-subtitle">{description}</h4>
	<svelte:component this={animation.default} />
</article>
<div>
	<BackTo
		href={`/${categories}`}
		text={`Back to all ${categories}`}
		classes="border-top"
	/>
</div>
