// p.20 - Consecutive Cubes
"use strict"

let perfectSquareFound = false;
let i = 2;

while (perfectSquareFound === false) {
   const x = i;
   const y = i + 1;
   const z = i + 2;

   const sumOfCubes = Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3);
   const squareOfSum = Math.sqrt(sumOfCubes);
   //console.log(`sum of cubes for ${x}, ${y}, ${z}: ${sumOfCubes}; square of sum of cubes ${squareOfSum}`);

   if (Math.floor(squareOfSum) === squareOfSum) {
      console.log(`The second consecutive cubes that add up to a perfect square are: ${i}, ${i + 1}, ${i + 2} which add up to ${sumOfCubes}, which is a perfect square of ${squareOfSum}`);
      perfectSquareFound = true;
   }

   i++;
}
