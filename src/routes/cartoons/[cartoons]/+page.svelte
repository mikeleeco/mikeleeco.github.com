<script>
	let { data } = $props();

	import BackTo from '$lib/BackTo.svelte';
	import Seo from '$lib/Seo.svelte';
	let image = $derived(data.image);
	let index = $derived(data.index);
	import { replaceJpeg, getRandomIntInclusive } from '$lib/utils/utils';
	import cartoons from '$lib/data/cartoons.json';
	import Icon from '$lib/components/Icon.svelte';

	import { goto } from '$app/navigation';
	import { format, parseISO } from 'date-fns';
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
	<div class="flex flex-row place-content-between gap-5 justify-self-center">
		<button
			aria-label="button-forward"
			class={`button m-2 h-20 w-20 items-center justify-center self-center ${index !== cartoons.length - 1 ? 'hidden sm:flex' : 'hidden'}`}
			onclick={() => goto(navigateCartoons('forward'))}><Icon name="arrow-left" /></button
		>
		<div class="mx-auto flex w-fit max-w-5xl flex-col gap-10 py-12 md:py-6">
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

			<div class="flex flex-col px-5">
				<p><strong>Date:</strong> {format(parseISO(image.Date), 'LLLL, y')}</p>
				<p class="">
					<strong>Tags:</strong>
					{Array.isArray(image.tags) ? image.tags.join(', ') : image.tags}
				</p>
				<strong>{index + 1}/{cartoons.length}</strong>
			</div>
		</div>

		<button
			aria-label="button-forward"
			class={`button m-2 h-20 w-20  items-center justify-center self-center  ${index !== 0 ? 'hidden sm:flex' : 'hidden'}`}
			onclick={() => goto(navigateCartoons('forward'))}><Icon name="arrow-right" /></button
		>
	</div>
	<div class="flex flex-col gap-5 place-self-end self-center items-center">
		<div class="flex flex-row sm:hidden">
			<button
				aria-label="button-forward"
				class={`button  h-20 w-20 items-center justify-center self-center  ${index !== 0 ? 'flex' : 'hidden'} sm:hidden`}
				onclick={() => goto(navigateCartoons('back'))}><Icon name="arrow-left" /></button
			>
			<button
				aria-label="button-forward"
				class={`button  h-20 w-20 items-center justify-center self-center  ${index !== cartoons.length - 1 ? 'flex' : 'hidden'} sm:hidden`}
				onclick={() => goto(navigateCartoons('forward'))}><Icon name="arrow-right" /></button
			>
		</div>

		<div>
			<button
				class="button"
				onclick={() => goto(`/cartoons/${replaceJpeg(cartoons[cartoons.length - 1].Filename)}`)}
				>Latest</button
			>
			<button class="button" onclick={() => goto(`/cartoons/${replaceJpeg(cartoons[0].Filename)}`)}
				>Oldest</button
			>
			<button
				class="button"
				onclick={() =>
					goto(
						`/cartoons/${replaceJpeg(cartoons[getRandomIntInclusive(0, cartoons.length)].Filename)}`
					)}>Random</button
			>
		</div>
	</div>
</div>
