"use strict"

let sequence = [0, 1]   // seed the sequence
const sequenceLength = 20;

findFib();
console.log(`Fibanoci: ${sequence.toString()}`);

function findFib() {
    sequence[sequence.length] = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (sequence.length < sequenceLength) {
        findFib();
    }
}



