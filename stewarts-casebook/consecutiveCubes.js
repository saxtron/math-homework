// p.20 - Consecutive Cubes
// The cubes of 1, 2, and 3 add up to 36, which is a perfect square of 6.  Find the next three consecutive numbers that have cubes which add up to a perfect square. 
"use strict"

let perfectSquareFound = false;
let i = 2;  // start at 2, since we're finding the consectutive cubes after 1, 2, 3

while (perfectSquareFound === false) {
   const x = i;        // variables to hold the three consecutive numbers
   const y = i + 1;
   const z = i + 2;

   // find the sum of the cubes of the consecutive numbers
   const sumOfCubes = Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3);

   // find the square of the sum of the cubes
   const squareOfSum = Math.sqrt(sumOfCubes);

   // check if the square is a whole number
   if (Math.floor(squareOfSum) === squareOfSum) {
      console.log(`The second consecutive number that have cubes which add up to a perfect square are: ${x}, ${y}, ${z} - which add up to ${sumOfCubes}, which is a perfect square of ${squareOfSum}`);
      perfectSquareFound = true;
   } else {
      i++;  // check the next three numbers
   }
}


