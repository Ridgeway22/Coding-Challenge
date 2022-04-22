function FirstReverse(str) {
	str = [ ...str ].reverse().join('');
	return str;
}

// keep this function call here
console.log(FirstReverse('jack'));
