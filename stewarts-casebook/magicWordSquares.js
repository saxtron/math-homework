// p.20 - Adonis Asteroid Mousterian
// 
"use strict"

let A, D, O, N, I, S;
let adonisSquare = [
    [ [`A`, `D`], [`I`, `N`], [`S`, `O`] ],
    [ [`I`, `S`], [`D`, `O`], [`A`, `N`] ],
    [ [`N`, `O`], [`A`, `S`], [`I`, `D`] ]
];
let possibleSolutionSet = {
    A: null,
    D: null,
    O: null,
    N: null,
    I: null,
    S: null
}


const numberOfCells = 9;

let totalSolutionsFound = 0;

// this solution finds permutations, but I'd be fine with combinations (or A single combination)
// but wait, it doesn't find ALL permuations, just some.


for (A = 0; A < numberOfCells; A++) {
    possibleSolutionSet[`A`] = A;
    for (D = 0; D < numberOfCells; D++) {
        possibleSolutionSet[`D`] = D;
        for (O = 0; O < numberOfCells; O++) {
            possibleSolutionSet[`O`] = O;
            for (N = 0; N < numberOfCells; N++) {
                possibleSolutionSet[`N`] = N;
                for (I = 0; I < numberOfCells; I++) {
                    possibleSolutionSet[`I`] = I;
                    for (S = 0; S < numberOfCells; S++) {
                        possibleSolutionSet[`S`] = S;
                        checkMagicSquare();
                    }
                }  
            }
        }
    }
}

// for (adonis_A = 0; adonis_A < numberOfCells; adonis_A++) {
//     for (adonis_D = 0; adonis_D < numberOfCells; adonis_D++) {
//         for (adonis_O = 0; adonis_O < numberOfCells; adonis_O++) {
//             for (adonis_N = 0; adonis_N < numberOfCells; adonis_N++) {
//                 for (adonis_I = 0; adonis_I < numberOfCells; adonis_I++) {
//                     for (adonis_S = 0; adonis_S < numberOfCells; adonis_S++) 



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
    totalSolutionsFound++;
    console.log(`We did it (${totalSolutionsFound}): ${a} ${d} ${o} ${n} ${i} ${s}`);
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


