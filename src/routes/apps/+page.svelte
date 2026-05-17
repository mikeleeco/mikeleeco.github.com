<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
	import BackTo from '$lib/BackTo.svelte';
	import Card from '$lib/components/Card.svelte';
	import Image from '$lib/components/Image.svelte';
	import Drawing from '$lib/components/Drawing.svelte';
</script>

<Seo title={'Apps'} />

<ContainerLayout>
	<div class="flex flex-col">
		<div>
			<BackTo href={`/`} text={`Home`} classes="" />
		</div>
		<div class="grid gap-5">
			<div>
				<h1 class="">Apps</h1>
				<div>
					<div class="flex flex-row rounded-md border border-2 border-[--theme-color-accent] p-4">
						<Card url="https://www.crabapplegames.com">
							<!-- <Image
								classNames="w-100"
								alt="Crabapple Games Logo"
								src="/img/crabapple-games.png"
								text={null}
							/> -->
							<Drawing alt="Crabapple Games Logo" name="crabapple-games" classNames="" />
						</Card>
						<div>
							<h2 class="">Crabapple Games</h2>
							<p>
								Crabapple Games is a daily puzzle games site for anagram fans. There are two daily
								puzzle games with more to come. Learn more at <a
									href="https://www.crabapplegames.com">https://www.crabapplegames.com</a
								>.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h1 class="">Websites</h1>
				<div>
					<div class="flex flex-row rounded-md border border-2 border-[--theme-color-accent] p-4">
						<Card url="https://www.brewcruisers.com">
							<Drawing alt="Brew Cruisers Logo" name="brew-cruisers" classNames="w-100 p-4" />
						</Card>
						<div>
							<h2 class="">Brew Cruisers</h2>
							<p>
								Brew Cruisers is the website for the monthly bike ride tailgate to enjoy live
								baseball and advocate for bicycle accommodations in Milwaukee and the stadium
								district. Learn more at <a href="https://www.brewcruisers.com"
									>https://www.brewcruisers.com</a
								>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</ContainerLayout>
