// p.20 - Adonis Asteroid Mousterian
// 
"use strict"

//ad in so
//is do an
//no as id

let a, d, o, n, i, s;
let adonisSquare;

const numberOfCells = 9;

for (a = 0; a < numberOfCells; a++) {
    for (d = 0; d < numberOfCells; d++) {
        for (o = 0; o < numberOfCells; o++) {
            for (n = 0; n < numberOfCells; n++) {
                for (i = 0; i < numberOfCells; i++) {
                    for (s = 0; s < numberOfCells; s++) {
                        adonisSquare = [
                            [ [a, d], [i, n], [s, o] ],
                            [ [i, s], [d, o], [a, n] ],
                            [ [n, o], [a, s], [i, d] ]
                        ];
                        checkMagicSquare();
                    }
                }  
            }
        }
    }
}



function checkMagicSquare() {
    let checker = [false, false, false, false, false, false, false, false, false];

    //console.log(`checkMagicSquare`);

    for (let z = 0; z < adonisSquare.length; z++) {
        for (let y = 0; y < adonisSquare[z].length; y++) {
            const cellTotal = adonisSquare[z][y][0] + adonisSquare[z][y][1];
            //console.log(`${adonisSquare[z][y][0]} plus ${adonisSquare[z][y][1]} is ${cellTotal}`);
            if (checker[cellTotal] === false) {
                checker[cellTotal] = true;
            } else {
                //console.log(`No dice: ${a} ${d} ${o} ${n} ${i} ${s}`);
                return false;
            }

        }
    }

    console.log(`We did it: ${a} ${d} ${o} ${n} ${i} ${s}`);
}

// We did it: 0 3 2 0 1 6


