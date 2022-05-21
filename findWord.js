function findWord(word) {
	let total = [];
	for (let i = 0; i < word.length; i++) {
		if (word[i].toLowerCase() === word[i]) {
			total.push(word[i]);
		}
	}
	const totals = total.join('');
	return totals;
}

console.log(findWord('bEEFGBuFBRrHgUHlNFYaYr'));
console.log(findWord('UcUNFYGaFYFYGtNUH'));
console.log(findWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment'));
