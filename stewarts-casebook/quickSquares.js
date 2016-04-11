// p.21 - Two Square Quickies
"use strict"

// how can we ensure the ordering??  it's just a coincidence at this point.
// add callback function parameter to findPermutations

let numberBuilder = [];
let largestPerfectSquare = [];   // decreasing numbers that include all digits
let smallestPerfectSquare = [];

let prefectSquares = [];

//findPerfectSquare(987654321);
findPerfectSquare(123456789);
//findPerfectSquare(1234);

function findPerfectSquare(startingNumber) {
	
	let numberBuilder = [];
	findPermutations(startingNumber.toString());


	console.log(`prefect squares: ${prefectSquares}`);
	//console.log('The largest perfect square using all the digits from 1 to 9 exactly once is: ' + largestSquare);
}



function findPermutations(n) {
	let i;
	let arrayOfNumbers = n.split('');

	for (i = 0; i < arrayOfNumbers.length; i++) {
		
		const digitRemovedFromNumber = arrayOfNumbers.splice(i, 1);  // digitRemovedFromNumber and digitInsertedIntoNumber will be the same, I just want to be more explicit for now
		numberBuilder.push(digitRemovedFromNumber);

		if (arrayOfNumbers.length === 0) {
			const potentialPerfectSquare = numberBuilder.join('');

			//console.log(`Built the number: ${potentialPerfectSquare}`);
			// test for square
			if (testForPerfectSquare(potentialPerfectSquare)) {
				console.log(`I found a perfect square: ${potentialPerfectSquare}`);
				prefectSquares.push(potentialPerfectSquare);
				//break;
			}

		}
		findPermutations(arrayOfNumbers.join('')); // can I put this in an else?
		//findPermutationsNonRecursive(arrayOfNumbers.join(''));

		const digitInsertedIntoNumber = numberBuilder.pop();
		arrayOfNumbers.splice(i, 0, digitInsertedIntoNumber);
	}

}

// just trying to wrap my head around how this is working
function findPermutationsNonRecursive(n) {
	let arrayOfNumbers = n.split('');
	let i;
	for (i = 0; i < arrayOfNumbers.length; i++) {
		numberBuilder.push(arrayOfNumbers.splice(i, 1));
		console.log(`I builded: ${numberBuilder.join('')}, with these left over: ${arrayOfNumbers.join('')}`);
		arrayOfNumbers.splice(i, 0, numberBuilder.pop());
	}

}



// Test if a number, p, is a perfect square (has a whole number as a square root).  Return true if the number is a perfect square, return false otherwise
function testForPerfectSquare(p) {
	const squareRoot = Math.sqrt(p);
	if (Math.floor(squareRoot) === squareRoot) {
		return true;
	}
	return false;

}


