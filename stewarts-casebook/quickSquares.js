// p.21 - Two Square Quickies
"use strict"

// how can we ensure the ordering??  it's just a coincidence at this point.

var numberBuilder = [];

findLargestSquare(987654321);
//findSmallestSquare(123456789);
//findSmallestSquare(1234);

function findLargestSquare(largestSquare) {
	
	numberBuilder = [];
	findPermutations(largestSquare.toString());


	//console.log('The largest perfect square using all the digits from 1 to 9 exactly once is: ' + largestSquare);
}


function findSmallestSquare(smallestSquare) {

	numberBuilder = [];
	findPermutations(smallestSquare.toString());

	//console.log('The smallest perfect square using all the digits from 1 to 9 exactly once is: ' + smallestSquare);
}


function findPermutations(n) {
	var i;
	var numberToPullOut, numberToPutBackIn;  // should be the same, just want to be more explicit
	var arrayOfNumbers = n.split('');

	for (i = 0; i < arrayOfNumbers.length; i++) {
		numberToPullOut = arrayOfNumbers.splice(i, 1);
		numberBuilder.push(numberToPullOut);

		if (arrayOfNumbers.length === 0) {
			// test for square
			console.log("Built the number: " + numberBuilder.join(''));
		}
		findPermutations(arrayOfNumbers.join(''));
		//findPermutationsNonRecursive(arrayOfNumbers.join(''));

		numberToPutBackIn = numberBuilder.pop();
		arrayOfNumbers.splice(i, 0, numberToPutBackIn);
	}

}

// just trying to wrap my head around how this is working
function findPermutationsNonRecursive(n) {
	var arrayOfNumbers = n.split('');
	for (i = 0; i < arrayOfNumbers.length; i++) {
		numberBuilder.push(arrayOfNumbers.splice(i, 1));
		console.log("I builded: " + numberBuilder.join('') + ', with these left over: ' + arrayOfNumbers.join(''));
		arrayOfNumbers.splice(i, 0, numberBuilder.pop());
	}

}



// Test if a number, n, is a perfect square (has a whole number as a square root).  Return true if the number is a perfect square, return false otherwise
function testForPerfectSquare(n) {
	squareRoot = Math.sqrt(n);
	if (Math.floor(root) === squareRoot) {
		return true;
	}
	return false;

}


