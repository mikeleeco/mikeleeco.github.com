<script>
	let { data } = $props();

	import BackTo from '$lib/BackTo.svelte';
	import Seo from '$lib/Seo.svelte';
	let image = $derived(data.image);
	let index = $derived(data.index);
	import { replaceJpeg } from '$lib/utils/utils';
	import cartoons from '$lib/data/cartoons.json';

	import { goto } from '$app/navigation';
	import {  format, parseISO } from 'date-fns';

	function onKeyDown(e) {
		let nextCartoon;

		switch (e.keyCode) {
			case 37:
				nextCartoon = cartoons[+index + 1];
				return goto(`/cartoons/${replaceJpeg(nextCartoon.Filename)}`);
			case 39:
				nextCartoon = cartoons[+index - 1];
				return goto(`/cartoons/${replaceJpeg(nextCartoon.Filename)}`);
			default:
				break;
		}
	}

	const navigateCartoons = (direction = 'back') => {
		let nextCartoon;
		// findCartoon(cartoons, img)
		if (direction === 'forward') {
			nextCartoon = cartoons[+index + 1];
		} else {
			// console.log('cartoons[7]: ', cartoons[7]);
			nextCartoon = cartoons[+index - 1];
		}
		return `/cartoons/${replaceJpeg(nextCartoon.Filename)}`;
	};
</script>

<svelte:head>
	<title>{replaceJpeg(image.Filename)}</title>
</svelte:head>

<Seo
	title={`Cartoon - ${replaceJpeg(image.Filename).toUpperCase()}`}
	description={image.Caption}
	keywords={image.tags}
/>
<svelte:window on:keydown|preventDefault={onKeyDown} />
<div class="flex flex-col">
	<div>
		<BackTo href={`/cartoons`} text={`Back to all cartoons`} classes="" />
	</div>
	<div class="flex flex-row place-content-between gap-5 pb-5">
		{#if index !== cartoons.length - 1}
			<button
				aria-label="button-forward"
				class="button mx-auto h-full w-20 self-center"
				type="submit"
				onclick={() => goto(navigateCartoons('forward'))}>{'<'}</button
			>
		{:else}
			<button aria-label="button-forward-spacing" class="button invisible mx-auto h-full w-20"
			></button>
		{/if}
		<div class="mx-auto flex max-w-5xl flex-col gap-10 py-8">
			<div class="flex flex-col">
				<!-- {image.Filename} -->
				<img
					src={`/img/cartoons/${image.Filename}`}
					alt={image.Description}
					class="max-w-full lg:max-h-full"
				/>

				{#if image.Caption}<span
						class="p-1 text-center font-serif text-lg italic sm:p-5 md:p-10 md:text-2xl"
						>{'"'}{image.Caption}{'"'}</span
					>{/if}
			</div>

			<div class="flex flex-col">
				<p><strong>Date:</strong> {format(parseISO(image.Date), 'LLLL, y')}</p>
				<p class="">
					<strong>Tags:</strong>
					{Array.isArray(image.tags) ? image.tags.join(', ') : image.tags}
				</p>
				<strong>{index + 1}/{cartoons.length}</strong>
			</div>
		</div>

		{#if index !== 0}
			<button
				aria-label="button-back"
				class="button mx-auto h-full w-20 self-center"
				type="submit"
				onclick={() => goto(navigateCartoons('back'))}>{'>'}</button
			>
		{:else}
			<button aria-label="button-back-spacing" class="button invisible mx-auto h-full w-20"
			></button>
		{/if}
	</div>
</div>
