<script>
	import { onMount } from 'svelte';
	import { pageTransitionDelay } from '../stores/global.js';
	import { prefersReducedMotion } from '../stores/motion.js';
	import { sleep } from '../scripts/utils.js';

	export let split = 'chars';
	export let stagger = 0.02;
	export let startingOpacity = 0;

	let gsap;
	let SplitText;

	let title, subtitle, content;

	async function transition() {
		title = document.querySelectorAll('.transition-title');
		subtitle = document.querySelectorAll('.transition-subtitle');
		content = document.querySelectorAll('.transition-content');

		if (content.length > 0) {
			content.forEach((d) => {
				gsap.set(d, { opacity: 0 });
				gsap.fromTo(d, { opacity: startingOpacity }, { opacity: 1, duration: 0.5, delay: 0.5 });
			});
		}

		if (title.length > 0) {
			title.forEach((d) => {
				gsap.set(d, { opacity: 0 });
				gsap.fromTo(d, { opacity: startingOpacity }, { opacity: 1, duration: 1.5 });

				const titleSplit = new SplitText(d, {
					type: 'lines,words,chars'
				});

				gsap.fromTo(
					titleSplit[split],
					{ y: '100%', opacity: startingOpacity, rotation: 0 },
					{
						y: 0,
						opacity: 1,
						rotation: 0,
						stagger: stagger,
						duration: 0.5,
						ease: 'power2.out'
					}
				);
			});
		}

		if (subtitle.length > 0) {
			subtitle.forEach((d) => {
				gsap.set(d, { opacity: startingOpacity });
				gsap.fromTo(d, { opacity: startingOpacity }, { opacity: 1, duration: 1.5 });

				const subtitleSplit = new SplitText(d, {
					type: 'lines,words,chars'
				});

				gsap.fromTo(
					subtitleSplit['words'],
					{ y: '100%', opacity: startingOpacity },
					{
						y: 0,
						opacity: 1,
						stagger: 0.02,
						duration: 0.5,
						ease: 'backwards'
					}
				);
			});
		}
	}

onMount(async () => {
	console.log('prefersReducedMotion:', $prefersReducedMotion);
	if ($prefersReducedMotion) return;

	const [{ gsap: gsapInstance }, { SplitText: SplitTextPlugin }] =
		await Promise.all([
			import('../scripts/gsap.js'),
			import('gsap/SplitText')
		]);

	gsap = gsapInstance;
	SplitText = SplitTextPlugin;
	gsap.registerPlugin(SplitText);

	await sleep($pageTransitionDelay);
	await transition();
});
</script>