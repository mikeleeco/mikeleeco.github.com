<!-- Skeleton for  -->
<script>
	import BackTo from '$lib/BackTo.svelte';
	import Seo from '$lib/Seo.svelte';

	export let data;
	let animation = data.animation;
	let { title, description, categories, img } = animation.metadata;
	let image = !img ? 'https://www.mikelee.co/img/michael.png' : 'https://www.mikelee.co' + img;
</script>

<Seo {title} {description} {image} />

<article>
	<div class="flex flex-col gap-5">
		<h3 class="page-title overflow-hidden">{title}</h3>
		<h4 class="page-subtitle">{description}</h4>

		<img src={image.replace('.png', '.gif')} alt={description} class="max-w-full lg:max-h-full" />
		<svelte:component this={animation.default} />
		<p>
			Interested in learning more? <a href="/contact">Contact me</a> to consult on your next project.
		</p>
	</div>
</article>
<div class="flex flex-col gap-5 py-5">
	<BackTo href={`/${categories}`} text={`Back to all ${categories}`} classes="border-top" />
</div>
