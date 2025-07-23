<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';

	import data from '$lib/data/cartoons.json';
	import { writable } from 'svelte/store';
	import { insertBeforeLastSlash } from '$lib/utils/utils';
	import { derived } from 'svelte/store';
	import BackTo from '$lib/BackTo.svelte';
	let selectedTag = $state('Aliens');
	let images = data;
	import { replaceJpeg } from '$lib/utils/utils';
	const tags = Array.from(new Set(data.flatMap((img) => img.tags))).sort();

	let filtered = $derived(images.filter((img) => img.tags.includes(selectedTag)));
	// let image = $derived(data.image);

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const randomFloat = $state(getRandomIntInclusive(0, data.length));
	let randomImage = $derived(data[randomFloat]);
</script>

<!-- Whats the best way to organize a sveltekit app to load up image information (alt text, image tags) saved in a csv file. 
 I'd like the image name to be the [id] then use the row returned to populate the image info -->
<Seo title={'Cartoons'} />
<ContainerLayout>
	<div class="flex flex-col">
		<div>
			<BackTo href={`/`} text={`Home`} classes="" />
		</div>
		<div class="grid gap-5">
			<h1 class=''>Cartoons</h1>
			<div>
				<button
					class="button"
					onclick={() => goto(`/cartoons/${replaceJpeg(data[data.length - 1].Filename)}`)}
					>Latest</button
				>
				<button class="button" onclick={() => goto(`/cartoons/${replaceJpeg(data[0].Filename)}`)}
					>Oldest</button
				>
				<button
					class="button"
					onclick={() =>
						goto(`/cartoons/${replaceJpeg(data[getRandomIntInclusive(0, data.length)].Filename)}`)}
					>Random</button
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
						class="block h-auto w-full content-center border object-contain p-4 hover:shadow lg:h-90"
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
