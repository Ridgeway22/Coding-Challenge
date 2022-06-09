function check(letter, word) {
	let sum = 0;
	for (let i = 0; i < word.length; i++) {
		if (word.charAt(i) === letter) {
			sum++;
		}
	}
	console.log(sum);
}
check('a', 'edabit');
check('c', 'Chamber of secrets');
check('b', 'big fat bubble');
