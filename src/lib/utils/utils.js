export function insertBeforeLastSlash(str, insert) {
	const idx = str.lastIndexOf('/');
	return str.slice(0, idx) + insert + str.slice(idx);
}

export function replaceJpeg(img) {
	return img.replace(/\.(jpg|jpeg)$/i, '');
}

import cartoons from '$lib/data/cartoons.json';

export function findCartoon(name) {
	let image = cartoons.find((img, i) => {
		const filename = replaceJpeg(img.Filename);
		if (filename === name) {
			return { img };
		}
	});
	return { image };
}


export function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
