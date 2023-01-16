<script>
	export let post;
	export let slug;

	export let anyHovered = false;

	import TransitionInView from '$lib/TransitionInView.svelte';

	let active = false;
</script>

<TransitionInView>
	<a
		class="container post-card  {anyHovered && !active ? 'inactive' : active ? 'active' : ''}"
		href={`${post.categories}/${slug}`}
		on:mouseover={() => {
			active = true;
			anyHovered = true;
		}}
		on:focus={() => {
			active = true;
			anyHovered = true;
		}}
		on:mouseleave={() => {
			active = false;
			anyHovered = false;
		}}
	>
		<h2 class="title">
			{post.title}
		</h2>
		<h3 class="description">
			{post.description}
		</h3>
		<div class="image-tags-container">
			<div class="image">
				<img loading="lazy" src={post.img} alt="Project img for {post.title}" class="post-img" />
			</div>
			<div class="post-tags">
				{#each post.tags as tag}
					<span class="post-tag">{tag} </span>
				{/each}
			</div>
		</div>
	</a>
</TransitionInView>

<style>
	.image-tags-container {
		display: flex;
		flex-direction: column;
	}

	.post-card {
		display: block;
	}

	.container {
		/* padding: 1.15rem 0; */
		border-bottom-color: rgba(var(--text-color-rgb), 0.05);
		border-bottom-style: solid;
		border-bottom-width: 0.5px;
		cursor: pointer;
	}

	.container::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 1px;
		bottom: -1px;
		left: 0;
		background-color: var(--accent-color);
		transform-origin: bottom left;
		transition: transform 500ms ease;
	}

	.container:hover::after {
		transform: scaleX(1);
	}

	.container > * {
		transition: opacity 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
			color 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99),
			text-shadow 600ms cubic-bezier(0.37, 0.35, 0.01, 0.99);
	}

	.title {
		flex: 1;
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.15;
		font-family: var(--font-sans);
		letter-spacing: -0.4px;
		color: var(--text-color);
	}

	.description {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1;
		font-family: var(--font-sans);
		color: var(--text-color);
	}

	.active > * {
		color: var(--accent-color);
	}

	.active {
		border-bottom-color: rgba(var(--text-color-rgb), 0.05);
	}

	.post-tags {
		padding: 0.5rem;
		text-align: right;
		flex-flow: row-reverse wrap;
		display: flex;
	}

	.post-tag {
		font-family: var(--font-sans);
		padding: 5px;
		background: rgba(var(--primary-color-rgb), 0.9);
		margin: 3px;
		border-radius: 3px;
		color: var(--text-color);
		font-size: 0.9rem;
		font-weight: 200;
		margin-right: 0.25rem;
		letter-spacing: 1px;
		border: 0.5px solid rgba(var(--accent-color-rgb), 0.7);
	}

	/* SMALL SCREENS */
	@media screen and (max-width: 700px) {
		.container {
			flex-direction: column;
			padding: 1rem 0;
			align-items: flex-start;
		}

		.title {
			margin-bottom: 0.35rem;
		}

		.description {
			margin-bottom: 0.35rem;
		}
	}
</style>
