function minMax(arr) {
	let min = arr[0];
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		} else if (max < arr[i]) {
			max = arr[i];
		}
	}
	return [ min, max ];
}

console.log(minMax([ 1, 2, 3, 4, 5 ]));
console.log(minMax([ 2334454, 5 ]));
console.log(minMax([ 1 ]));
