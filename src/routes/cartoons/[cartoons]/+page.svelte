<script>
	let { data } = $props();

	import BackTo from '#lib/BackTo.svelte';
	import Seo from '#lib/Seo.svelte';
	let image = $derived(data.image);
	let index = $derived(data.index);
	import { replaceJpeg, getRandomIntInclusive, cartoonPath, navigateImages,onKeyDown } from '#lib/utils/utils.js';
	import cartoons from '#lib/data/cartoons.json';
	import Icon from '#lib/components/Icon.svelte';

	import { goto } from '$app/navigation';
	import { format, parseISO } from 'date-fns';


</script>

<svelte:head>
	<title>{replaceJpeg(image.Filename)}</title>
</svelte:head>

<Seo
	title={`${replaceJpeg(image.Filename).toUpperCase()} - Cartoon by Mike Lee`}
	description={image.Description}
	keywords={'cartoon,single panel,' + image.tags.toString()}
	image={`https://www.mikelee.co/cartoons/${replaceJpeg(image.Filename)}`}
/>
<svelte:window on:keydown|preventDefault={onKeyDown} />
<div class="flex flex-col">
	<div class="p-2 sm:p-5">
		<BackTo href={`/cartoons`} text={`Back to all cartoons`} classes="" />
	</div>
	<div class="flex flex-row place-content-between gap-5 justify-self-center">
		<button
			aria-label="button-forward"
			class={`button m-2 h-20 w-20 items-center justify-center self-center sm:block ${index !== 0 ? ' hidden' : 'hidden sm:invisible'}`}
			onclick={() => navigateImages('back', index)}><Icon name="arrow-left" /></button
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
						>{'"'}{@html image.Caption}{'"'}</span
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
			class={`button m-2 h-20 w-20  items-center justify-center self-center  ${index === cartoons.length -1  ? 'hidden sm:invisible sm:block' : 'hidden sm:block'}`}
			onclick={() => navigateImages('forward', index)}><Icon name="arrow-right" /></button
		>
	</div>
	<div class="flex flex-col items-center gap-5 place-self-end self-center">
		<div class="flex flex-row sm:hidden">
			<button
				aria-label="button-forward"
				class={`button  h-20 w-20 items-center justify-center self-center  ${index !== 0 ? 'flex' : 'hidden'} sm:hidden`}
				onclick={() => navigateImages('back', index)}><Icon name="arrow-left" /></button
			>
			<button
				aria-label="button-forward"
				class={`button  h-20 w-20 items-center justify-center self-center  ${index === cartoons.length - 1 ? 'hidden sm:block sm:invisible' : ''}`}
				onclick={() => navigateImages('forward', index)}><Icon name="arrow-right" /></button
			>
		</div>

		<div>
			<button
				class="button"
				onclick={() => goto(cartoonPath(cartoons[cartoons.length - 1]))}
				>Latest</button
			>
			<button class="button" onclick={() => goto(cartoonPath(cartoons[0]))}
				>Oldest</button
			>
			<button
				class="button"
				onclick={() =>
					goto(cartoonPath(
						cartoons[getRandomIntInclusive(0, cartoons.length)]))}>Random</button
			>
		</div>
	</div>
</div>
