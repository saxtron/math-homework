// p.20 - Consecutive Cubes

var perfectSquareFound = false;
var i = 1;
var sumOfCubes, squareOfSum;
var j, k;

while (perfectSquareFound === false) {
   i++;
   j = i + 1;
   k = i + 2;
   sumOfCubes = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
   //console.log('Sum Of Cubes for ' + i + ', ' + j + ', ' + k + ': ' + sumOfCubes );

   squareOfSum = Math.sqrt(sumOfCubes);
   if (Math.floor(squareOfSum) === squareOfSum) {
      perfectSquareFound = true;
   }
   
}

console.log('The second consecutive cubes that add up to a perfect square are: ' + i + ', ' + j + ', ' + k + ' which add up to ' + sumOfCubes + ' which is a perfect square of ' + squareOfSum);

