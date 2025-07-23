<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
</script>

<Seo title={'About'} />
<ContainerLayout>
	<div class="grid gap-5">
		<h1>Licenses</h1>
		<div>
			<h2>Art</h2>
			<blockquote>
				<p>
					These artwork are licensed under the Creative Commons Attribution-NonCommercial 4.0
					International License (CC BY-NC 4.0).
				</p>
				<p></p>
				<p>You are free to:</p>
				<ol>
					<li>
						<span class="">Share</span> — copy and redistribute the material in any medium or format
					</li>
					<li>
						<span class="">Adapt</span> — remix, transform, and build upon the material
					</li>
				</ol>
				<p>Under the following terms:</p>
				<ol>
					<li><span class="">Attribution</span> — You must give appropriate credit.</li>
					<li>
						<span class="">NonCommercial</span> — You may not use the material for commercial purposes.
					</li>
				</ol>
			</blockquote>
			<p>
				For full license details visit: <a href="https://creativecommons.org/licenses/by-nc/4.0/"
					>https://creativecommons.org/licenses/by-nc/4.0/</a
				>
			</p>
		</div>
		<div>
			<h2>Code</h2>
			<p>The code on this website adheres to the MIT License</p>
			<blockquote>
				<div class="flex flex-col gap-2">
					<p>Copyright (c) 2025 Michael Lee</p>
					<p>
						Permission is hereby granted, free of charge, to any person obtaining a copy of this
						software and associated documentation files (the "Software"), to deal in the Software
						without restriction, including without limitation the rights to use, copy, modify,
						merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
						permit persons to whom the Software is furnished to do so, subject to the following
						conditions:
					</p>
					<p>
						The above copyright notice and this permission notice shall be included in all copies or
						substantial portions of the Software.
					</p>
					<p>
						THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
						INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
						PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
						LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
						OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
						OTHER DEALINGS IN THE SOFTWARE.
					</p>
				</div>
			</blockquote>
		</div>
	</div>
</ContainerLayout>
