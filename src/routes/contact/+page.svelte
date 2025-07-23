<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
</script>

<Seo title={'About'} />
<ContainerLayout>
	<div class="grid gap-5">
		<h1>Contact</h1>

		<div>
			<h2>Socials</h2>
			<ul class="">
				<li>
					<span class="">
						Instagram:
						<a href="https://www.instagram.com/mikeleeco">instagram.com/mikeleeco</a>
					</span>
				</li>
				<li>
					<span class="">
						Blue Sky:
						<a href="https://bsky.app/profile/mikelee.co">https://bsky.app/profile/mikelee.co</a>
					</span>
				</li>
			</ul>
		</div>
	</div>
</ContainerLayout>
