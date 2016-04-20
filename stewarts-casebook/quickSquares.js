// p.21 - Two Square Quickies
"use strict"

// how can we ensure the ordering??  it's just a coincidence at this point.
// add callback function parameter to findPermutations

var distinctDigitPerfectSquareFinder = {
    
    // intialNumber: 0,
    // direction: 0;

    // init: function(n, d) {
    //     this.initalNumber = n;
    //     this.direction = d;  // destructure?

    //     // check if the initial number has distinct digits
    // },


    // Brute force at it's finest!
    // To find the smalled perfect square check all numbers greater than 123456789 one by one, first to see if they contain every digit, and then to see if they are a perfect square
    // Use the same method to find the largest perfect square, starting at 987654321 and decreasing one at a time.
    method1: function() {

        // let changeToNumber;
        // if (this.direction === `increase`) {
        //     changeToNumber = 1;
        // } else {
        //     changeToNumber = -1;
        // }

        // for (let )


        let smallestPerfectSquare;
        let largestPerfectSquare;

        for (let i = 123456789; i < 987654321; i++) {
            if (this.doesThisNumberHaveRepeatedDigits(i) === false) {
                if (this.testForPerfectSquare(i)) {
                    smallestPerfectSquare = i;
                    break;
                }
            }
        }

        for (let i = 987654321; i > 123456789; i--) {
            if (this.doesThisNumberHaveRepeatedDigits(i) === false) {
                if (this.testForPerfectSquare(i)) {
                    largestPerfectSquare = i;
                    break;
                }
            }
        }

        if (smallestPerfectSquare) {
            console.log(`The smallest prefect square is ${smallestPerfectSquare} (which is a square of ${Math.sqrt(smallestPerfectSquare)}).`); 
            console.log(`The largest perfect square is ${largestPerfectSquare} (which is a square of ${Math.sqrt(largestPerfectSquare)}).`);
        } else {
            console.log(`Could not find any perfect squares :(`);
        }
    },


    // Find the roots first, and then check if the square contains every digit from 1-9
    method3: function() {
        // currently this solution assumes there's an answer, which there might not be.

        let smallestPerfectSquare;
        let largestPerfectSquare;
        let testSquare;
        let testRoot;

        const smallestRoot = Math.sqrt(123456789);
        testRoot = Math.floor(smallestRoot);
        while (smallestPerfectSquare === undefined) {
            testRoot++;
            testSquare = Math.pow(testRoot, 2);
            //console.log(`the test is: ${testRoot}, the square is: ${testSquare}`);
            if (this.doesThisNumberHaveRepeatedDigits(testSquare) === false) {
                smallestPerfectSquare = testSquare;
            }
        }

        const largestRoot = Math.sqrt(987654321);
        testRoot = Math.ceil(largestRoot);
        while (largestPerfectSquare === undefined) {
            testRoot--;
            testSquare = Math.pow(testRoot, 2);
            //console.log(`the test is: ${testRoot}, the square is: ${testSquare}`);
            if (this.doesThisNumberHaveRepeatedDigits(testSquare) === false) {
                largestPerfectSquare = testSquare;
            }
        }

        console.log(`I think ${smallestPerfectSquare} is the smallest perfect square and ${largestPerfectSquare} is the largest perfect square with all the numbers from 1 to 9`);
    },


    doesThisNumberHaveRepeatedDigits: function(n) {
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
    },

    // Test if a number, p, is a perfect square (has a whole number as a square root).  Return true if the number is a perfect square, return false otherwise
    testForPerfectSquare: function(p) {
        const squareRoot = Math.sqrt(p);
        if (Math.floor(squareRoot) === squareRoot) {
            return true;
        }
        return false;
    }


};

//distinctDigitPerfectSquareFinder.init(123456789, 1);
//distinctDigitPerfectSquareFinder.method1();
distinctDigitPerfectSquareFinder.method3();



let numberBuilder = [];
let largestPerfectSquare = [];   // decreasing numbers that include all digits
let smallestPerfectSquare = [];
let prefectSquares = [];


let permutationsFound = 0;
let howManyTimesIsFindPermutationsCalled = 0;

//findPerfectSquare(987654321);
//findPerfectSquare(123456789);
//findPerfectSquare(1234);

//carefullyIncreaseNumber();

function findPerfectSquare(startingNumber) {    
    let numberBuilder = [];
    findPermutations(startingNumber.toString());

    console.log(`prefect squares: ${prefectSquares}`);
    //console.log('The largest perfect square using all the digits from 1 to 9 exactly once is: ' + largestSquare);
    console.log(`The findPermutations function was called ${howManyTimesIsFindPermutationsCalled} times`);
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
    howManyTimesIsFindPermutationsCalled++;

    for (i = 0; i < arrayOfNumbers.length; i++) {
        
        const digitRemovedFromNumber = arrayOfNumbers.splice(i, 1);  // digitRemovedFromNumber and digitInsertedIntoNumber will be the same, I just want to be more explicit for now
        numberBuilder.push(digitRemovedFromNumber);

        if (arrayOfNumbers.length === 0) {
            const potentialPerfectSquare = numberBuilder.join('');
            permutationsFound++;
            console.log(`Built the number: ${potentialPerfectSquare}  - value of arrayOfNumbers.length is ${arrayOfNumbers.length}. potentialSquare#: ${permutationsFound}`);
            


            // test for prefect square
            if (testForPerfectSquare(potentialPerfectSquare)) {
                console.log(`I found a perfect square: ${potentialPerfectSquare}`);
                prefectSquares.push(potentialPerfectSquare);
                //break;
            }

        } else {
            findPermutations(arrayOfNumbers.join('')); // can I put this in an else? YES!
        }

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


