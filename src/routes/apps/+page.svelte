<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
	import BackTo from '$lib/BackTo.svelte';
</script>

<Seo title={'Apps'} />

<ContainerLayout>
	<div class="flex flex-col">
		<div>
			<BackTo href={`/`} text={`Home`} classes="" />
		</div>
		<div class="grid gap-5">
			<h1 class="">Apps</h1>
			<p>More to come...</p>
		</div>
	</div>
</ContainerLayout>
