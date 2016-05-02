// p.20 - Adonis Asteroid Mousterian
// Find the numbers that correspond to each letter in a magic word square, that make a magic numerical square when the numbers in each cell are added together,
// and have the totals run from 0 to n - 1, where n is the number of cells in the square.
"use strict"

//let numberOfCells, letterKeys;
let adonisSquare = {
    letters: { A: 0, D: 0, O: 0, N: 0, I: 0, S: 0 },   // use .keys to generate an array of the letters
    layout: [
        [`AD`, `IN`, `SO`],
        [`IS`, `DO`, `AN`],
        [`NO`, `AS`, `ID`]
    ]
    //A: 0, D: 0, O: 0, N: 0, I: 0, S: 0
};
let numberOfCells = adonisSquare.layout.length * adonisSquare.layout[0].length;
let letterKeys = Object.keys(adonisSquare.letters);
let totalSolutions = 0;

findMagicWordSquareSolution(adonisSquare, 0);


function findMagicWordSquareSolution(magicSquare, currentPosition) {

    for(magicSquare.letters[letterKeys[currentPosition]] = 0; magicSquare.letters[letterKeys[currentPosition]] < numberOfCells; magicSquare.letters[letterKeys[currentPosition]]++) {

        if (currentPosition >= letterKeys.length - 1 ) {
            checkMagicSquare(magicSquare);
        } else {
            findMagicWordSquareSolution(magicSquare, currentPosition + 1);
        }

    }
    // make a recursive function for this.
    // for (magicSquare.letters[0] = 0; magicSquare.letters[0] < numberOfCells; magicSquare.letters[0]++) {
    //     for (magicSquare.letters.D = 0; magicSquare.letters.D < numberOfCells; magicSquare.letters.D++) {
    //         for (magicSquare.letters.O = 0 ; magicSquare.letters.O < numberOfCells; magicSquare.letters.O++) {
    //             for (magicSquare.letters.N = 0 ; magicSquare.letters.N < numberOfCells; magicSquare.letters.N++) {
    //                 for (magicSquare.letters.I = 0 ; magicSquare.letters.I < numberOfCells; magicSquare.letters.I++) {
    //                     for (magicSquare.letters.S = 0 ; magicSquare.letters.S < numberOfCells; magicSquare.letters.S++) {
    //                         checkMagicSquare(magicSquare);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

}



function checkMagicSquare(magicSquare) {
    if (checkAllNumbersAreUsed(magicSquare)) {
        totalSolutions++;
        //console.log(`We really did it: ${magicSquare.letters.A} ${magicSquare.letters.D} ${magicSquare.letters.O} ${magicSquare.letters.N} ${magicSquare.letters.I} ${magicSquare.letters.S}`);
        console.log(`We really did it (${totalSolutions}): ${magicSquare.letters[letterKeys[0]]} ${magicSquare.letters[letterKeys[1]]} ${magicSquare.letters[letterKeys[2]]} ${magicSquare.letters[letterKeys[3]]} ${magicSquare.letters[letterKeys[4]]} ${magicSquare.letters[letterKeys[5]]}`);
    }
}

function checkAllNumbersAreUsed(magicSquare) {
    let checker = [false, false, false, false, false, false, false, false, false];

    for (let i = 0; i < magicSquare.layout.length; i++) {
        for (let j = 0; j < magicSquare.layout[0].length; j++) {
            const cellTotal = magicSquare.letters[magicSquare.layout[i][j].charAt(0)] + magicSquare.letters[magicSquare.layout[i][j].charAt(1)];
            if (checker[cellTotal] === false) {
                checker[cellTotal] = true;
            } else {
                return false;
            }
        }
    }
    return true;
}




//ad in so
//is do an
//no as id

// Book's answer: a=0 d=3 o=2 n=0 i=1 s=6
// 3  1  8
// 7  5  0
// 2  6  4

// another potential: a=3, d=2, o=0, n=0, i=6, s=1
// 5  6  1
// 7  2  3
// 0  4  8


