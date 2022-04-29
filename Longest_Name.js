function LongestWord(sen) {
    let words = sen.match(/[a-z]+/gi);
	let word = words.sort(function(a,b){return b.length - a.length;})
	return word[0];
}

// keep this function call here
console.log(LongestWord('fun&!! time'));
console.log(LongestWord("I love dogs"));
