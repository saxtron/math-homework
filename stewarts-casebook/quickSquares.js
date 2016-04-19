// p.21 - Two Square Quickies
"use strict"

// how can we ensure the ordering??  it's just a coincidence at this point.
// add callback function parameter to findPermutations

let numberBuilder = [];
let largestPerfectSquare = [];   // decreasing numbers that include all digits
let smallestPerfectSquare = [];

let prefectSquares = [];

findPerfectSquare(987654321);
//findPerfectSquare(123456789);
// prefect squares: 139854276,152843769,157326849,215384976,245893761,254817369,326597184,361874529,375468129,382945761,385297641,412739856,523814769,529874361,537219684,549386721,587432169,589324176,597362481,615387249,627953481,653927184,672935481,697435281,714653289,735982641,743816529,842973156,847159236,923187456

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



// const testNumbers = [1234, 1234321, 1934520, 123456789, 111111];
// //const testNumbers = [601314, 1234567890];

// for (let i = 0; i < testNumbers.length; i++) {
//     console.log(`\n\nthe number is ${testNumbers[i]}`)
//     if (doesThisNumberHaveRepeatedDigits(testNumbers[i]) === true) {
//         console.log(`${testNumbers[i]} has repeat digits.  :((((((((((((((((`);
//     } else {
//         console.log(`${testNumbers[i]} does not have repeat digits!  YAAAYYY!`);
//     }

// }

// for (let i = 123456789; i < 987654321; i++) {
//  if (doesThisNumberHaveRepeatedDigits(i) === false) {
//      if (testForPerfectSquare(i)) {
//          console.log(`Smallest perfect square: ${i} (square of: ${Math.sqrt(i)})`);
//          break;
//      }
//  }
// }
// // 139854276 (square of: 11826)


// for (let i = 987654321; i > 123456789; i--) {
//  if (doesThisNumberHaveRepeatedDigits(i) === false) {
//      if (testForPerfectSquare(i)) {
//          console.log(`Largest perfect square: ${i} (square of: ${Math.sqrt(i)})`);
//          break;
//      }
//  }
// }
// 923187456 (square of: 30384)


function doesThisNumberHaveRepeatedDigits(n) {

    const numberAsString = n.toString();
    const lastPositionToCheck = numberAsString.length - 1;  // don't need to check the last position since it didn't match any of the pervious digits
    
    for (let currentPosition = 0; currentPosition < lastPositionToCheck; currentPosition++) {
        const currentDigit = numberAsString.charAt(currentPosition);
        const isThisARepeatDigit = numberAsString.indexOf(currentDigit, currentPosition + 1);
        //console.log(`currentPosition is ${currentPosition}, currentDigit is ${currentDigit}, and is it found anywhere? ${isThisARepeatDigit}`);

        if (isThisARepeatDigit > 0) {
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

Biggest: 
923187456
923187456


*/

