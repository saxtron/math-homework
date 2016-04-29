// p.20 - Adonis Asteroid Mousterian
// 
"use strict"
let totalSolutionsFound = 0;

let adonis = {
    square: [
        [ [`A`, `D`], [`I`, `N`], [`S`, `O`] ],
        [ [`I`, `S`], [`D`, `O`], [`A`, `N`] ],
        [ [`N`, `O`], [`A`, `S`], [`I`, `D`] ]
    ]
};
const numberOfCells = adonis.square.length * adonis.square[0].length;
//console.log(`${numberOfCells}`);




// make a recursive function for this.
for (adonis.A = 0; adonis.A < numberOfCells; adonis.A++) {
    for (adonis.D = 0; adonis.D < numberOfCells; adonis.D++) {
        for (adonis.O = 0; adonis.O < numberOfCells; adonis.O++) {
            for (adonis.N = 0; adonis.N < numberOfCells; adonis.N++) {
                for (adonis.I = 0; adonis.I < numberOfCells; adonis.I++) {
                    for (adonis.S = 0; adonis.S < numberOfCells; adonis.S++) {
                        checkMagicSquare();
                    }
                }
            }
        }
    }
}



function checkMagicSquare() {
    let checker = [false, false, false, false, false, false, false, false, false];

    for (let z = 0; z < adonis.square.length; z++) {
        for (let y = 0; y < adonis.square[0].length; y++) {
            const cellTotal = adonis[adonis.square[z][y][0]] + adonis[adonis.square[z][y][1]];
            //console.log(`${adonisSquare[z][y][0]} plus ${adonisSquare[z][y][1]} is ${cellTotal}`);
            if (checker[cellTotal] === false) {
                checker[cellTotal] = true;
            } else {
                //console.log(`No dice: ${a} ${d} ${o} ${n} ${i} ${s}`);
                return false;
            }

        }
    }
    totalSolutionsFound++;
    console.log(`We did it (${totalSolutionsFound}): ${adonis.A} ${adonis.D} ${adonis.O} ${adonis.N} ${adonis.I} ${adonis.S}`);
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


