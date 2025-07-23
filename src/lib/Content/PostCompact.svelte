<script>
	export let post;
	export let slug;

	import { parseISO, format } from 'date-fns';
	let active = false;
</script>

<a class="hover:underline" href={`${post.categories}/${slug}`}>
	<div class="hover:border-red flex flex-row gap-2 border-2 border-transparent text-[var(--theme-color-text)]">
		<span class="">
			{format(parseISO(post.date), 'yyyy')}
		</span>
		<div class="image hidden w-1/8 place-self-center sm:block">
			<img loading="lazy" src={post.img} alt="Project img for {post.title}" class="post-img" />
		</div>
		<span class="title w-2/5 text-sm">
			{post.title}
		</span>
		<span class="description w-2/5 text-xs sm:text-sm">
			{post.description}
		</span>
		<div class="sm:w-1/8">
			<div class="hidden flex-row gap-1 sm:flex">
				{#each post.tags as tag}
					<span class="border-accent flex rounded-md border-1 p-1 text-xs">{tag} </span>
				{/each}
			</div>
		</div>
	</div>
</a>

<style>
</style>
