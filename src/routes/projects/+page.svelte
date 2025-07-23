<script>
	import Transition from '$lib/Transition.svelte';
	import Post from '$lib/Content/PostCompact.svelte';
	import BackTo from '$lib/BackTo.svelte';

	let { data } = $props();
	let projects = data.projects;

	let filteredProjects = projects.sort((a, b) => {
		if (Date.parse(b.metadata.date) > Date.parse(a.metadata.date)) return 1;
		if (Date.parse(b.metadata.date) < Date.parse(a.metadata.date)) return -1;
	});
</script>

<Transition />

<main class="main">
	<BackTo href="/" text="Home" classes="" />
	<h1 class="">Projects</h1>

	<div class="">
		{#each filteredProjects as project}
			<div class="projects-overlay">
				<Post post={project.metadata} slug={project.slug} />
				<!-- {project.metadata} -->
			</div>
		{/each}
	</div>
</main>

<style>
</style>
