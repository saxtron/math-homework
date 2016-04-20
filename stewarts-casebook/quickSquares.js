// p.21 - Two Square Quickies
"use strict"

// how can we ensure the ordering??  it's just a coincidence at this point.
// add callback function parameter to findPermutations

//method1();
method3();

let numberBuilder = [];
let largestPerfectSquare = [];   // decreasing numbers that include all digits
let smallestPerfectSquare = [];
let prefectSquares = [];

//findPerfectSquare(987654321);
//findPerfectSquare(123456789);
//findPerfectSquare(1234);

//carefullyIncreaseNumber();

function findPerfectSquare(startingNumber) {    
    let numberBuilder = [];
    findPermutations(startingNumber.toString());

    console.log(`prefect squares: ${prefectSquares}`);
    //console.log('The largest perfect square using all the digits from 1 to 9 exactly once is: ' + largestSquare);
}


function carefullyIncreaseNumber() {
    // increase the number to the next number that contains every digit from 1 to 9 exactly once
    // this function needs to wrap findPermutations, and get one number back at a time (need to pull some of the functionality out of findPermutations, if possible)
    const startingNumber = 123456789;
    let currentNumber = startingNumber;

    let pefectSquareFound = false;
    while (perfectSquareFound === false) {

        nextNumber = findPermutations();

        // test nextNumber


    }

}

function findPermutations(n) {
    let i;
    let arrayOfNumbers = n.split('');

    for (i = 0; i < arrayOfNumbers.length; i++) {
        
        const digitRemovedFromNumber = arrayOfNumbers.splice(i, 1);  // digitRemovedFromNumber and digitInsertedIntoNumber will be the same, I just want to be more explicit for now
        numberBuilder.push(digitRemovedFromNumber);

        if (arrayOfNumbers.length === 0) {
            const potentialPerfectSquare = numberBuilder.join('');
            //console.log(`Built the number: ${potentialPerfectSquare}  - value of arrayOfNumbers.length is ${arrayOfNumbers.length}`);
            
            // test for prefect square
            if (testForPerfectSquare(potentialPerfectSquare)) {
                console.log(`I found a perfect square: ${potentialPerfectSquare}`);
                prefectSquares.push(potentialPerfectSquare);
                //break;
            }

        }
        findPermutations(arrayOfNumbers.join('')); // can I put this in an else?

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


// Find the roots first, and then check if the square contains every digit from 1-9
function method3() {

    let foundPerfectSquare = false;
    const smallestRoot = Math.sqrt(123456789);
    let testRoot = Math.floor(smallestRoot);
    let testSquare;

    while(foundPerfectSquare === false) {
        testRoot++;
        testSquare = testRoot * testRoot;
        //console.log(`the test is: ${testRoot}, the square is: ${testSquare}`)
        if (doesThisNumberHaveRepeatedDigits(testSquare) === false) {
            foundPerfectSquare = true;
        }

    }

    console.log(`I think ${testSquare} is the smallest perfect square with all the numbers from 1 to 9`);

}




// Brute force at it's finest!
// To find the smalled perfect square check all numbers greater than 123456789 one by one, first to see if they contain every digit, and then to see if they are a perfect square
// Use the same method to find the largest perfect square, starting at 987654321 and decreasing one at a time.
function method1() {

    let smallestPerfectSquare;
    let largestPerfectSquare;

    for (let i = 123456789; i < 987654321; i++) {
        if (doesThisNumberHaveRepeatedDigits(i) === false) {
            if (testForPerfectSquare(i)) {
                smallestPerfectSquare = i;
                break;
            }
        }
    }

    for (let i = 987654321; i > 123456789; i--) {
        if (doesThisNumberHaveRepeatedDigits(i) === false) {
            if (testForPerfectSquare(i)) {
                largestPerfectSquare = i;
                break;
            }
        }
    }

    if (smallestPerfectSquare) {
        console.log(`The smallest prefect square is ${smallestPerfectSquare} (which is a square of ${Math.sqrt(smallestPerfectSquare)}).`); 
        console.log(`The largest perfect square is ${largestPerfectSquare} (which is a square of ${Math.sqrt(largestPerfectSquare)}).`);
    } else {
        console.log(`Could not find any perfect squares `)
    }
}



// Testing for doesThisNumberHaveRepeatedDigits function
// const testNumbers = [1234, 1234321, 1934520, 123456789, 111111];
// // //const testNumbers = [601314, 1234567890];

// for (let i = 0; i < testNumbers.length; i++) {
//     console.log(`\n\nthe number is ${testNumbers[i]}`)
//     if (doesThisNumberHaveRepeatedDigits(testNumbers[i]) === true) {
//         console.log(`${testNumbers[i]} has repeat digits.  :((((((((((((((((`);
//     } else {
//         console.log(`${testNumbers[i]} does not have repeat digits!  YAAAYYY!`);
//     }

// }

function doesThisNumberHaveRepeatedDigits(n) {
    const numberAsString = n.toString();
    const lastPositionToCheck = numberAsString.length - 1;  // don't need to check the last position since it didn't match any of the pervious digits
    
    for (let currentPosition = 0; currentPosition < lastPositionToCheck; currentPosition++) {
        const currentDigit = numberAsString.charAt(currentPosition);
        const numberToCheckForRepeats = numberAsString.substring(currentPosition + 1);
        //console.log(`currentPosition is ${currentPosition}, currentDigit is ${currentDigit}, and will it be found in here: ${numberToCheckForRepeats}`);
        
        if (numberToCheckForRepeats.includes(currentDigit)) {
            return true;
        }
    }
    return false;
}



/*
 ==== POTENTIAL ANSWERS ====

Smallest: 
139854276
139854276
139854276

Biggest: 
923187456
923187456


*/

