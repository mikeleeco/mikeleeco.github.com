<script>
	/**
	 * @type {{ categories: any; img: any; title: any; date: string | any[]; description: any; tags: any; }}
	 */
	export let post;
	/**
	 * @type {any}
	 */
	export let slug;

	export let hovered = false;

	let active = false;
</script>

<div
	class="row post-card"
	on:mouseover={() => {
		active = true;
		hovered = true;
	}}
	on:focus={() => {
		active = true;
		hovered = true;
	}}
	on:mouseleave={() => {
		active = false;
		hovered = false;
	}}
	class:hovered
>
	<a
		class="container {hovered && !active ? 'inactive' : active ? 'active' : ''}"
		href={`${post.categories}/${slug}`}
	>
		<div class="column left">
			<img loading="lazy" src={post.img} alt="post img for {post.title}" class="post-img" />
		</div>
		<div class="column right">
			<time datetime={post.date} class="hidden-mobile">{post.date.slice(0, 4)}</time>
			<h2 class="title">
				{post.title}
			</h2>
			<h3 class="description">
				{post.description}
			</h3>
			<div class="post-tags">
				{#each post.tags as tag}
					<span class="post-tag">{tag} </span>
				{/each}
			</div>
		</div>
	</a>
</div>

<style>
	.row:after {
		content: '';
		display: table;
		clear: both;
	}
	.column {
		float: left;
	}

	.left {
		width: 20%;
	}

	.right {
		padding: 1rem;
		width: 75%;
	}

	.post-card {
		border-radius: 5px;
		box-shadow: 1px 1px 4px var(--box-shadow-color);
		height: 100%;
		padding: 1rem;
		cursor: pointer;
		display: block;
		border: 1px solid transparent;
	}

	.hovered {
		border: 1px solid var(--theme-color-accent);
	}

	.title {
		flex: 1;
		font-size: 1.5rem;
		line-height: 1.15;
		font-family: var(--font-serif);
		letter-spacing: -0.4px;
		color: var(--theme-color-text);
		font-weight: 600;
		line-height: 1.15;
	}

	.description {
		color: var(--theme-pure-text-color);

		font-family: var(--font-sans);
		font-size: 1rem;
		line-height: 1.2;
		font-weight: 300;
		margin-top: 12px;
		letter-spacing: 0.64px;
	}

	.active > * {
		color: var(--theme-color-accent);
	}

	.active {
		border-bottom-color: rgba(var(--theme-color-text-rgb), 0.05);
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
		background: rgba(var(--theme-color-background-rgb), 0.9);
		margin: 3px;
		border-radius: 3px;
		color: var(--theme-color-text);
		font-size: 0.9rem;
		font-weight: 200;
		margin-right: 0.25rem;
		letter-spacing: 1px;
		border: 0.5px solid rgba(var(--theme-color-accent), 0.7);
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
			color: var(--theme-color-accent);
			font-size: 1.5rem;
			font-weight: 600;
			line-height: 1.15;
		}

		time {
			padding: 0;
		}

		.hidden-mobile {
			display: none;
			visibility: hidden;
		}
	}
</style>
