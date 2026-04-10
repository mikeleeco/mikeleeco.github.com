<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { theme } from '../stores/theme.js';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let { member = false, handleSwitch = false } = $props();

	let themes = [
		{ title: '🌚  Dark', theme: 'dark' },
		{ title: '🌝  Light', theme: 'light' }
	];

	let themeOptions = $derived.by(() => {
		return member ? themes : themes.filter((a) => (a.theme === 'dark') | (a.theme === 'light'));
	});

	let selectedTheme = $state();
	onMount(() => {
		selectedTheme = localStorage.getItem('theme');
		if (!selectedTheme) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.setAttribute('data-theme', 'dark');
				selectedTheme = 'dark';
			} else {
				document.documentElement.setAttribute('data-theme', 'light');
				selectedTheme = 'light';
			}
			$theme = selectedTheme;
		}
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
	{#each themeOptions as i}
		<button
			class="button button-icon {selectedTheme === i.theme
				? 'border-accent cursor-pointer border-2'
				: 'border-2 border-transparent'}"
			data-set-theme={i.theme}
			onclick={setColors}
			type={'button'}
		>
			{i.title}
		</button>
	{/each}
{/key}
