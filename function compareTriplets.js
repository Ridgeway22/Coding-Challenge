function compareTriplets(a, b) {
	// Write your code here
	let alice = 0;
	let bob = 0;
	for (i = 0; i < 4; i++)
		if (a[i] > b[i]) {
			alice = alice + 1;
		} else if (b[i] > a[i]) {
			bob = bob + 1;
		}
	return (total = [ alice, bob ]);
}
let a = [ 17, 28, 30 ];
let b = [ 99, 16, 8 ];
console.log(compareTriplets(a, b));

// sum of an array
function aVeryBigSum(ar) {
	// Write your code here
	let total = 0;
	for (let i = 0; i < ar.length; i++) {
		total += ar[i];
	}
	return total;
}
ar = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ];
console.log(aVeryBigSum(ar));
