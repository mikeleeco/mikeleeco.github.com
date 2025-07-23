<script>
	import { page } from '$app/stores';
	import Icon from '$lib/components/Icon.svelte';

	let showTech = false;
</script>

<div class="error">
	<img
		loading="lazy"
		src={'/img/ghostbusters.gif'}
		alt="Peter Venkman denial animation. Sorry you've reached an error. - Mike"
	/>
	<hr />
	<h2>Error {$page.status}</h2>

	<button
		on:click={() => {
			showTech = !showTech;
		}}
	>
		{showTech ? 'Hide' : 'Show'} the technical details {@html showTech ? '&uarr;' : '&darr;'}
	</button>
	{#if showTech}
		<pre>{$page.error.message}</pre>
	{/if}

	<h1>Sorry we've encountered an error.</h1>
	<p>
		If this continues please feel free to reach out to me on <a
			class="link"
			target="_blank"
			rel="noopener noreferrer"
			href="https://twitter.com/mikeleeco"><Icon class="icon" name="twitter" /> Twitter</a
		>
	</p>
	<p>-Mike</p>
</div>

<style>
	.error {
		margin: auto;
		margin-top: calc(var(--nav-height) + 3rem);
		max-width: 1068px;
		width: 95%;
		padding: 1rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	h2 {
		font-family: var(--font-mono);
		font-size: 1rem;
		margin-bottom: 0.75rem;
		padding: 0.75rem;
		width: max-content;
		background: var(--semitransparent-bg);
		box-shadow: 1px 1px 6px var(--box-shadow-color);
		border-radius: 3px;
	}

	button {
		margin-bottom: 1rem;
		cursor: pointer;
	}

	pre {
		font-family: var(--font-mono);
		overflow-x: scroll;
		overflow-y: visible;
		height: max-content;
		padding: 1rem;
		background: var(--semitransparent-bg);
		box-shadow: 1px 1px 6px var(--box-shadow-color);
	}

	h1,
	p,
	pre {
		color: var(--theme-color-text);
	}
</style>
