export function returnTileValue(letter) {
	let tileValues = [
		{
			letter: 'A',
			score: 1,
			num: 8
		},
		{
			letter: 'B',
			score: 3,
			num: 2
		},
		{
			letter: 'C',
			score: 3,
			num: 2
		},
		{
			letter: 'D',
			score: 2,
			num: 4
		},
		{
			letter: 'E',
			score: 1,
			num: 12
		},
		{
			letter: 'F',
			score: 4,
			num: 2
		},
		{
			letter: 'G',
			score: 2,
			num: 3
		},
		{
			letter: 'H',
			score: 4,
			num: 2
		},
		{
			letter: 'I',
			score: 1,
			num: 9
		},
		{
			letter: 'J',
			score: 8,
			num: 1
		},
		{
			letter: 'K',
			score: 5,
			num: 1
		},
		{
			letter: 'L',
			score: 1,
			num: 4
		},
		{
			letter: 'M',
			score: 3,
			num: 2
		},
		{
			letter: 'N',
			score: 1,
			num: 6
		},
		{
			letter: 'O',
			score: 1,
			num: 8
		},
		{
			letter: 'P',
			score: 3,
			num: 2
		},
		{
			letter: 'Q',
			score: 10,
			num: 1
		},
		{
			letter: 'R',
			score: 1,
			num: 6
		},
		{
			letter: 'S',
			score: 1,
			num: 4
		},
		{
			letter: 'T',
			score: 1,
			num: 6
		},
		{
			letter: 'U',
			score: 1,
			num: 4
		},
		{
			letter: 'V',
			score: 4,
			num: 2
		},
		{
			letter: 'W',
			score: 4,
			num: 2
		},
		{
			letter: 'X',
			score: 8,
			num: 1
		},
		{
			letter: 'Y',
			score: 4,
			num: 2
		},
		{
			letter: 'Z',
			score: 10,
			num: 1
		}
	];

	let value;

	value = tileValues.filter((d) => d.letter === letter.toUpperCase());

	return value[0].score;
}
