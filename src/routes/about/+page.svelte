<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
</script>

<Seo title={'About'} />
<ContainerLayout>
	<div class="grid gap-5">
		<h1>About Michael Lee</h1>
		<p>
			I’m a full-stack developer with an interest in creating cross-platform applications. Crabapple
			Games is a self-developed web application and mobile app. Check out
			<a href="https://www.crabapplegames.com">Crabapple Games</a>.
		</p>
		<p>
			I’m a cartoonist who has submitted around 200 single panel cartoons to the New Yorker. I enjoy
			working in ink and watercolor. Check out some of <a href="/cartoons">my cartoons</a>.
		</p>
		<p>
			I’m a research and data professional with an interest in creating products and tools that
			supplement the acquisition of knowledge. My toolkit includes R, SQL, D3, and LaTeX, and my
			background in special education assists in making complex concepts accessible. Check out my <a
				href="/resume">resume</a
			>
			and scroll through my <a href="/projects">projects</a> and
			<a href="/animation">data visualization</a> products.
		</p>
		<div>
			<h2>License</h2>
			Visit the
			<a target="_blank" aria-label="footer-link" rel="noopener noreferrer" href="/license"
				>License</a
			>
			page for more information about the content of this website.
		</div>
		<div>
			<h2>Contact</h2>
			<p>
				Interested in learning more? <a href="/contact">Contact me</a> to draw a cartoon or consult on
				your next project.
			</p>
		</div>
	</div>
</ContainerLayout>
