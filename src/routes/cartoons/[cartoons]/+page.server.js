import cartoons from '$lib/data/cartoons.json';
import { findCartoon } from '$lib/utils/utils';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const { image } = findCartoon(params.cartoons);

	const findCartoonIndex = (img) => {
		return img.Filename === image?.Filename;
	};

	let index = cartoons.findIndex(findCartoonIndex);
	if (!image) {
		throw new Error(`Image not found: ${params.cartoons}`);
	}

	return { image: image, index };
}

// /** @type {import('./$types').Actions} */
// export const actions = {
// 	back: async ({ request }) => {
// 		// await removeRideIfExists(wordlistId)
// 		// await resetForms()

// 		console.log('hello from the server!');
// 	},
// 	forward: async ({ request }) => {
// 		// await removeRideIfExists(wordlistId)
// 		// await resetForms()

// 		console.log('hello from the server!');
// 	}
// };
