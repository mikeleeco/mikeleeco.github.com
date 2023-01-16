export function checkGuess(completed) {
	if (completed) {
		pickedWord.result = 'winner!';
		return false;
	} else {
		pickedWord.guess = value;
		if (pickedWord.guess === 'mikelee') {
			pickedWord.result = 'got it!';
			newWord();
		} else if (pickedWord.answer === pickedWord.guess) {
			pickedWord.result = 'got it!';

			wordList = words.filter((d) => (d.result === 'got it!') & (d.answer !== 'mikelee'));
			newWord();
		} else {
			pickedWord.result = 'keep guessin';
		}
	}
}
