// p.20 - Consecutive Cubes
"use strict"

let perfectSquareFound = false;
let i = 2;  // start at 2, since we're finding the consectutive cubes after 1, 2, 3
let x, y, z;  // variables to hold three consecutive numbers
let sumOfCubes;  // the sum of the cubes of consecutive numbers 
let squareOfSum;  // the square of the sumOfCubes

while (perfectSquareFound === false) {
   x = i;
   y = i + 1;
   z = i + 2;

   sumOfCubes = Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3);
   squareOfSum = Math.sqrt(sumOfCubes);
   //console.log(`sum of cubes for ${x}, ${y}, ${z}: ${sumOfCubes}; square of sum of cubes ${squareOfSum}`);

   if (Math.floor(squareOfSum) === squareOfSum) {
      perfectSquareFound = true;
   } else {
      i++;  // check the next three numbers
   }
}

console.log(`The second consecutive cubes that add up to a perfect square are: ${x}, ${y}, ${z} which add up to ${sumOfCubes}, which is a perfect square of ${squareOfSum}`);
