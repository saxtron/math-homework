// p.20 - Adonis Asteroid Mousterian
// 
"use strict"

let adonis = {
    square: [
        [ `AD`, `IN`, `SO` ],
        [ `IS`, `DO`, `AN` ],
        [ `NO`, `AS`, `ID` ]
    ],
    A: 0, D: 0, O: 0, N: 0, I: 0, S: 0
};

const numberOfCells = adonis.square.length * adonis.square[0].length;
let totalSolutionsFound = 0;


// make a recursive function for this.
for (adonis.A = 0; adonis.A < numberOfCells; adonis.A++) {
    for (adonis.D = 0; adonis.D < numberOfCells; adonis.D++) {
        for (adonis.O = 0 ; adonis.O < numberOfCells; adonis.O++) {
            for (adonis.N = 0 ; adonis.N < numberOfCells; adonis.N++) {
                for (adonis.I = 0 ; adonis.I < numberOfCells; adonis.I++) {
                    for (adonis.S = 0 ; adonis.S < numberOfCells; adonis.S++) {
                        checkMagicSquare(adonis);
                    }
                }
            }
        }
    }
}


function checkMagicSquare(magicSquare) {
    if (checkAllNumbersAreUsed(magicSquare)) {
        totalSolutionsFound++;
        console.log(`We really did it (${totalSolutionsFound}): ${magicSquare.A} ${magicSquare.D} ${magicSquare.O} ${magicSquare.N} ${magicSquare.I} ${magicSquare.S}`);
    }
}

function checkAllNumbersAreUsed(magicSquare) {
    let checker = [false, false, false, false, false, false, false, false, false];

    for (let i = 0; i < magicSquare.square.length; i++) {
        for (let j = 0; j < magicSquare.square[0].length; j++) {
            const cellTotal = magicSquare[magicSquare.square[i][j].charAt(0)] + magicSquare[magicSquare.square[i][j].charAt(1)];
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


