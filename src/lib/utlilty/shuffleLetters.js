export function shuffleLetters(array, returnWord = true) {
	var i = array.length,
		j = 0,
		temp;

	while (i--) {
		j = Math.floor(Math.random() * (i + 1));

		// swap randomly chosen element with current element
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	if (returnWord) {
		return array.join('');
	} else {
		return array;
	}
}
