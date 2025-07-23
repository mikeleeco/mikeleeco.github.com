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
<div
	class="grid grid-cols-1 place-items-center content-start gap-4 lg:w-full lg:grid-cols-3 lg:grid-rows-3"
>
	<!-- Top -->
	<div class="hidden lg:order-1 lg:block"></div>
	<div class="order-2">
		<a href="/apps">
			<Brick>
				<Drawing alt="Apps icon" name="apps" classNames="text-left w-1/2 lg:w-1/4 lg:self-center" />
				<span class="text-left text-5xl">Apps</span>
			</Brick></a
		>
	</div>
	<div class="hidden lg:order-3 lg:block"></div>

	<!-- Middle -->
	<div class="order-4">
		<a href="/cartoons">
			<Brick>
				<Drawing alt="Cartoons icon" name="cartoons" classNames="w-1/2 lg:w-1/4 lg:self-center" />
				<span class="text-left text-5xl">Cartoons</span>
			</Brick></a
		>
	</div>

	<div class="hidden h-75 w-75 p-6 text-center text-white sm:flex xl:order-5">
		{#if visible}
			<!-- <video autoplay muted playsinline onended={() => (visible = false)} class="">
					<source src="/img/leeAnimation.webm" type="video/webm" />
					<source src="/img/leeAnimation.mp4" type="video/mp4" />

					Your browser does not support the video tag.
				</video> -->
			<Logo />
		{:else}
			<!-- <div class="hidden sm:block"> -->
			<Logo />
			<!-- </div> -->
		{/if}
	</div>
	<div class="order-6">
		<a href="/posts">
			<Brick>
				<Drawing alt="Posts icon" name="posts" classNames="w-1/2 lg:w-1/4 lg:self-center" />
				<span class="text-left text-5xl">Posts</span>
			</Brick></a
		>
	</div>

	<!-- Bottom -->
	<div class="hidden lg:order-7 lg:block"></div>
	<div class="order-8">
		<a href="/about">
			<Brick>
				<Drawing alt="About icon" name="about" classNames="w-1/2 lg:w-1/4 lg:self-center" />
				<span class="text-left text-5xl">About</span>
			</Brick></a
		>
	</div>
	<div class="hidden lg:order-9 lg:block"></div>
</div>
