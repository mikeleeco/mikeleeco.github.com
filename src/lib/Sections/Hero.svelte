<script>
	import { onMount } from 'svelte';
	import { windowHeight, windowWidth } from '../../stores/global.js';
	import { prefersReducedMotion } from '../../stores/motion.js';
	import { sleep } from '../../scripts/utils.js';
	import Icon from '$lib/components/Icon.svelte';
	// // vanilla js
	// const video = document.getElementById('intro-animation');
	// video.onended = () => {
	// 	video.style.transition = 'opacity 0.5s ease';
	// 	video.style.opacity = '0';
	// 	setTimeout(() => (video.style.display = 'none'), 500);
	// };

	// // sveltekit adapted vanilla
	// let videoElement;

	// function handleVideoEnd() {
	// 	videoElement.style.transition = 'opacity 0.5s ease';
	// 	videoElement.style.opacity = '0';

	// 	setTimeout(() => {
	// 		videoElement.style.display = 'none';
	// 	}, 500);
	// }

	// sveltekit native
	import { fade } from 'svelte/transition';
	import Brick from '$lib/components/Brick.svelte';
	import Drawing from '$lib/components/Drawing.svelte';
	import Logo from '$lib/Logo.svelte';
	let visible = true;
</script>

<!-- Animation of lee logo -->
<!-- after pause, display links with drawn icons -->

<div class="grid min-h-fit grid-rows-4 place-content-between place-items-center justify-center">
	<div class="lg:col-span-1 lg:col-start-2">
		<a href="/apps">
			<Brick>
				<Drawing
					alt="Apps icon"
					name="apps"
					classNames="text-left w-1/3 h-1/3 lg:w-1/4 lg:self-center"
				/>
				<span class="text-left text-5xl">Apps</span>
			</Brick></a
		>
	</div>
	<div class="lg:col-span-1 lg:row-start-2">
		<a href="/my-cartoons">
			<Brick>
				<Drawing
					alt="Cartoons icon"
					name="cartoons"
					classNames="w-1/3 h-1/3 lg:w-1/4 lg:self-center"
				/>
				<span class="text-left text-5xl">Cartoons</span>
			</Brick></a
		>
	</div>
	<div
		class="hidden h-75 w-75 p-6 text-center text-white lg:col-span-1 lg:row-start-2 lg:grid xl:order-5 xl:flex"
	>
		<Logo />
	</div>
	<div class="lg:col-span-1 lg:col-start-3 lg:row-start-2">
		<a href="/posts">
			<Brick>
				<Drawing alt="Posts icon" name="posts" classNames="w-1/3 h-1/3 lg:w-1/4 lg:self-center" />
				<span class="text-left text-5xl">Posts</span>
			</Brick></a
		>
	</div>
	<div class="row-start-3 lg:col-span-1 lg:col-start-2">
		<a href="/about">
			<Brick>
				<Drawing alt="About icon" name="about" classNames="w-1/3 h-1/3 lg:w-1/4 lg:self-center" />
				<span class="text-left text-5xl">About</span>
			</Brick></a
		>
	</div>
</div>
