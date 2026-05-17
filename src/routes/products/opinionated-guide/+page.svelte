<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
	import BackTo from '$lib/BackTo.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

<Seo title={'Apps'} />

<ContainerLayout>
	<div class="flex flex-col">
		<div>
			<BackTo href={`/`} text={`Home`} classes="" />
		</div>
		<div class="grid gap-5">
			<Image
				classNames="w-100"
				alt="Cover to An Opinionated Guide to Urban Cycling"
				src="/img/opinionated-zine.png"
				text={null}
			/>
			<h1 class="">An Opinionated Guide to Urban Cycling</h1>
			<p>
				An Opinionated Guide to Urban Cycling is a zine for new and aspiring bike riders. It will
				prepare you for riding, instill confidence to make mistakes, and provide guidance and
				resources to get on the saddle again. Consider it a starter pack to riding in the city.
			</p>
			<p>
				The first print of these has already sold out but I plan to make a second print soon to
				clean up a few mistakes in the first. Find these at future zine festivals around Milwaukee
				or at this page.
			</p>

			<div>
				<Image
					classNames="border-2 rounded-md border"
					alt="Screenshot of An Opinionated Guide to Urban Cycling 1"
					src="/img/opinionated-zine-1.png"
					text={null}
				/>
				<Image
					classNames="border-2 rounded-md border"
					alt="Screenshot of An Opinionated Guide to Urban Cycling 2"
					src="/img/opinionated-zine-2.png"
					text={null}
				/>
				<Image
					classNames="border-2 rounded-md border"
					alt="Screenshot of An Opinionated Guide to Urban Cycling 3"
					src="/img/opinionated-zine-3.png"
					text={null}
				/>
			</div>
		</div>
	</div>
</ContainerLayout>
