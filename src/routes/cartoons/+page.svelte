<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '#lib/Seo.svelte';
	import ContainerLayout from '#lib/components/ContainerLayout.svelte';

	import data from '#lib/data/cartoons.json';
	import { replaceJpeg, getRandomIntInclusive, cartoonPath } from '#lib/utils/utils.js';

	import BackTo from '#lib/BackTo.svelte';
	let selectedTag = $state('Animals');
	let cartoons = data;
	const tags = Array.from(new Set(data.flatMap((img) => img.tags))).sort();

	let filtered = $derived(cartoons.filter((img) => img.tags?.includes(selectedTag)));
	// let image = $derived(data.image);

	const randomFloat = $state(getRandomIntInclusive(0, data.length));
	let randomImage = $derived(data[randomFloat]);
</script>

<!-- Whats the best way to organize a sveltekit app to load up image information (alt text, image tags) saved in a csv file. 
 I'd like the image name to be the [id] then use the row returned to populate the image info -->
<Seo title={'Cartoons by Mike Lee'} />
<ContainerLayout>
	<div class="flex flex-col">


		<div>
			<BackTo href={`/`} text={`Home`} classes="" />
		</div>
		<div class="grid gap-5">
			<h1 class="">Cartoons</h1>
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

			<!-- <div class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3">
			<a
				href={`/cartoons/${replaceJpeg(randomImage.Filename)}`}
				class="block w-full border object-contain p-4 hover:shadow lg:h-90"
			>
				<img
					src={`/img/cartoons/${randomImage.Filename}`}
					alt={randomImage.Description}
					class="max-w-full lg:max-h-full"
				/>

			</a>
		</div> -->

			<select bind:value={selectedTag} class="mb-4 border p-2">
				<option value="">All Tags</option>
				{#each tags as tag}
					<option value={tag}>{tag}</option>
				{/each}
			</select>

			Search cartoons by tag: {selectedTag}

			<div class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2">
				{#each filtered as image}
					<a
						href={`/cartoons/${replaceJpeg(image.Filename)}`}
						class="content-center overflow-hidden border p-4 hover:bg-(--theme-color-secondary) lg:h-90"
					>
						<img
							src={`/img/cartoons/${image.Filename}`}
							alt={image.Description}
							class="lg:max-h-auto max-w-full"
						/>
						<!-- <img src={`/img/cartoons/${insertBeforeLastSlash(image.Path, "/Captions/")}`} alt={image.Caption} class="lg:max-h-full max-w-full " /> -->
						<!-- <p class="mt-2 text-sm text-gray-600">{image.Caption}</p> -->
					</a>
				{/each}
			</div>
		</div>
	</div>
</ContainerLayout>
