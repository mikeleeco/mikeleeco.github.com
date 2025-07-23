<script>
	import Transition from '$lib/Transition.svelte';
	import Post from '$lib/Content/PostCompact.svelte';
	import BackTo from '$lib/BackTo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
	let { data } = $props();
	let posts = data.posts;

	let recentPosts = posts.filter((b) => {
		// console.log('b.metadata.date: ', b.metadata.date);

		if (Date.parse(b.metadata.date) > Date.parse('2020-06-10')) return 1;
		else return null;
	});

	let featuredPosts = posts
		.filter((d) => d.metadata.featured == true)
		// Sort by featured first, and if featured is the same (both false), then sort by date
		.sort((a, b) => {
			if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
			if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
		});
</script>

<Transition />

<ContainerLayout>
	<div class="flex flex-col justify-center">
		<BackTo href="/" text="Home" classes="heading" />
		<h1 class="">Posts</h1>
		<!-- <h3 class="description transition-title">Description</h3> -->
		<div class="flex flex-col gap-10">
			<div>
				<h2 class="">Recent Posts</h2>
				{#each recentPosts as post}
					<div>
						<Post post={post.metadata} slug={post.slug} />
					</div>
				{/each}
			</div>

			<div>
				<h2 class="">Featured Posts</h2>
				<div class="">
					{#each featuredPosts as post}
						<div>
							<Post post={post.metadata} slug={post.slug} />
						</div>
					{/each}
				</div>
			</div>

			<!-- UPDATE: posts should start with 2025 changes -->
			<!-- List popular posts -->
			<!-- List personal favorites -->
			<!-- List chronological posts -->
		</div>
	</div>
</ContainerLayout>

<style>
</style>
