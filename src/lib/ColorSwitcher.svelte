<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { theme } from '../stores/theme.js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let themes = $state([
		{ title: '🌚  Dark', theme: 'dark' },
		{ title: '🌝  Light', theme: 'light' }
	]);

	let selectedTheme = $state();
	onMount(() => {
		selectedTheme = localStorage.getItem('theme');
		$theme = selectedTheme;
		console.log('selectedTheme:', selectedTheme);
		document.documentElement.setAttribute('data-theme', $theme);
	});

	async function setColors(click) {
		let newTheme = click.target.getAttribute('data-set-theme');
		$theme = newTheme;
		if (newTheme) {
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.theme = newTheme;
			selectedTheme = newTheme;
		}
	}
</script>

<!-- 			disabled={$theme === i.theme} -->
{#key $theme}
	{#each themes as i}
		<button
			class="button-icon {selectedTheme === i.theme
				? 'border-accent cursor-pointer border-2'
				: 'border-2 border-transparent'}"
			data-set-theme={i.theme}
			onclick={preventDefault(setColors)}
			type={'button'}
		>
			{i.title}
		</button>
	{/each}
{/key}
