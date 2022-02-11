let fs = require("fs");
let line = [];
let bits = [];

const inputNumbers = fs
    .readFileSync("inputs/input3.txt", { encoding: "utf-8"})
    .split("\n")
    .filter(x => x.includes("1" || "0"))

    for(row of inputNumbers){

        for(let i = 0; i < row.length; i++){
            if (i === 0) {
                line = new Array(12)
            }

            if (row.charAt(i) === '1') {
                line.splice([i], 1, 1);
            } else if (row.charAt(i) === '0') {
                line.splice([i], 1, 0);
            } else {
                console.log(`Not sure what ${row.charAt(i)} is`);
            }
        }
        bits.push(line)
    }

function filterByCriteria(bitsArray, position) {
    let zeroCount = 0;
    let oneCount = 0;

    bitsArray.forEach((row) => { 
    if (row[position] === 1) {
        oneCount++
    } else if (row[position] === 0) { 
        zeroCount++
    }
   })

   console.log(`one: ${oneCount} + zero: ${zeroCount}`)

   if (zeroCount === oneCount) {
        keepCriteriaBits(bitsArray, 1, position)
   }

   zeroCount > oneCount ? keepCriteriaBits(bitsArray, 0, position) : keepCriteriaBits(bitsArray, 1, position)
} 

function keepCriteriaBits(bitsArr, number, position) {
    console.log(number)
    trimmedArray = bitsArr.filter((bit) => bit[position] === number)
    // run filter again on next position if there's >1 array item
    // filterByCriteria position +1
    if (trimmedArray.length === 2) {
        console.log(trimmedArray)
    } else {
        filterByCriteria(trimmedArray, position + 1)
    }
}

filterByCriteria(bits, 0)
// 110101000111
// 010011100001

console.log(3399*1249)

// 3399
// 1249


// function which focuses on one position
// find life support rating ( oxy gen rating * c02 scrubber rating)
// start with list and consider just first bit of each line
    // keep only numbers selected by criteria, discard others.
    // stop when there is only one number left; this is the rating value
    // otherwise repeat the process considering the next bit on the right

// the bit criteria for oxy generator rating is as follows:
    // determine the most common value in bit 1 of the lines

