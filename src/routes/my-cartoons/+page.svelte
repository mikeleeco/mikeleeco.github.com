<script>
	// export let data;
	import { goto } from '$app/navigation';

	import Seo from '$lib/Seo.svelte';
	import ContainerLayout from '$lib/components/ContainerLayout.svelte';
	import BackTo from '$lib/BackTo.svelte';
	import Image from '$lib/components/Image.svelte';
	import Brick from '$lib/components/Brick.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<Seo title={'Published'} />

<ContainerLayout>
	My cartoons have appeared The Wall Street Journal. I've experimented with mediums including
	pencil, ink and watercolor. Most of my shared and published pieces are digitally re-edited for
	imperfections. If you are interested in an original or a re-draw please let me know.

	<div class="flex flex-col gap-10">
		<div>
			<h1>Published</h1>
			<a href="https://www.wsj.com/opinion/pepperand-salt-9d475405">
				<Image
					classNames="w-100"
					alt="Cover to An Opinionated Guide to Urban Cycling"
					src="/img/im-74304137.png"
					text={null}
				/>
			</a>
			<p>
				Pepper and Salt, March 2, 2026 <a
					class=""
					href="https://www.wsj.com/opinion/pepperand-salt-9d475405">Wall Street Journal.</a
				>
			</p>
		</div>
		<div>
			<h1>Self-published</h1>

			<div>
				<h2 class="">Zines</h2>
				<Card url="/products/opinionated-guide">
					<p>An Opinionated Guide to Urban Cycling, Milwaukee Zine Fest</p>
					<Image
						classNames="w-100"
						alt="Cover to An Opinionated Guide to Urban Cycling"
						src="/img/bikingGuy.png"
						text={null}
					/>
				</Card>
			</div>
			<div>
				<h2 class=""><a href="/cartoons">Cartoons</a></h2>
				<p>Some personal favorite cartoons</p>

				<div class="grid-cols grid w-full grid-cols-1 sm:grid-cols-2">
					<a href="/cartoons/bodybuilding">
						<Image
							classNames="w-100"
							alt="A man lifts a large ball in a workout room organized in the shape of a large man exercising."
							src="/img/cartoons/bodybuilding.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/bee">
						<Image
							classNames="w-100"
							alt="A bee in sunglasses lays on a flower. It sips from a soda can and turns the page of a book with each of it’s antennae"
							src="/img/cartoons/bee.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/lightbulb">
						<Image
							classNames="w-100"
							alt="A couple of large lamps are talking to each other. A classroom of light bulbs sit brightly except for one dim bulb in the front row."
							src="/img/cartoons/lightbulb.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/mrBee">
						<Image
							classNames="w-100"
							alt="A boss sits behind a desk with fake antennae and a black striped tie on the telephone. A secretary wearing antennae and wings holds a clipboard. Three people wearing bee antenae shake hands in a nearby office. A bee sitting on a flower holds a telephone and has it’s right foreleg raised in disgust"
							src="/img/cartoons/mrBee.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/scrapers">
						<Image
							classNames="w-100"
							alt="Two towers rise up over a forest. One is being held by wires."
							src="/img/cartoons/scrapers.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/gamenight">
						<Image
							classNames="w-100"
							alt="A woman sits back dejectedly in her chair next to four bemused table mates playing a board game. A hidden person shouts from behind a closed door in a nearby room."
							src="/img/cartoons/gamenight.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/ice">
						<Image
							classNames="w-100"
							alt="A man reaches a plastic scraper on a large pole towards the front windows of an airplane. The caption reads “De-icing the plane."
							src="/img/cartoons/ice.jpeg"
							text={null}
						/>
					</a>

					<a href="/cartoons/medical">
						<Image
							classNames="w-100"
							alt="A man stands with their head hanging low. A group of medical staff with discerning looks congregate at a computer near a reception area. A nurse puts her arm on the man’s shoulder and says… "
							src="/img/cartoons/medical.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/organic">
						<Image
							classNames="w-100"
							alt="A poster promoting a band. Four skeletal formulas of four-carbon alkyl radicals each have a mop of black hair. The poster reads: “ENJOY THE BUTYLS ON ORGANIC RECORDS”"
							src="/img/cartoons/organic.jpeg"
							text={null}
						/>
					</a>
					<a href="/cartoons/eras">
						<Image
							classNames="w-100"
							alt="The title reads “Theseus Eras” followed by 9 images of boats with three sails. Viking: a figure with long hair sits and flexes on the bow. Baroque: a figure stands on the bow with a large guitar. Big Band: four of the same boat trail behind the main boat in a group. First Great Quintet: Two figures play piano and drums on the deck and figures play trumpet, upright bass, and saxophone in three crows nests atop the masts. White album: no figures on boat and white masts. Pop: two cannonballs shoot from hull of boat. New Wave: masts In the form of a Devo hat. Yacht Rock: mast in the form of a sailor’s cap. Grunge: masts are flannel and torn."
							src="/img/cartoons/eras.jpeg"
							text={null}
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</ContainerLayout>
