export async function newWord() {
	if ((pickedWord.answer === 'mikelee') & (pickedWord.guess === 'mikelee')) {
		await sleep(3000);
	}

	let arr = words.filter(
		(d) => (d.text !== pickedWord.text) & (d.result !== 'got it!') & (d.answer !== 'mikelee')
	);
	pickedWord = arr[Math.floor(Math.random() * arr.length)];
	if (completed) {
		return false;
	} else {
		value = pickedWord.guess;
	}

	return true;
}
