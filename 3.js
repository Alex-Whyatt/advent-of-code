let fs = require("fs");
let binaryCount = {zero: [], one: []};
let gammaTotal = [];

const inputNumbers = fs
    .readFileSync("inputs/input3.txt", { encoding: "utf-8"})
    .split("\n")
    .filter(x => x.includes("1" || "0"))

const bits = inputNumbers[0].length

for (let i = 0; i < bits; i++) {
    let zeroCount = 0;
    let oneCount = 0;

    for (let i2 = 0; i2 < inputNumbers.length; i2++) {
        if (inputNumbers[i2].charAt(i) === "1") {
            oneCount += 1
        }
        if (inputNumbers[i2].charAt(i) === "0") {
            zeroCount += 1
        }
    }
    binaryCount['zero'].push(zeroCount)
    binaryCount['one'].push(oneCount)
}

function getGammaRate(object) {
    for (let position = 0; position < bits; position++) {
        if (parseInt(object['zero'][position]) >= parseInt(object['one'][position])) {
            gammaTotal.push(0)
        } else {
            gammaTotal.push(1)
        }
    }
}

getGammaRate(binaryCount)

console.log(gammaTotal)

let gammaString = ""

gammaBinary = gammaTotal.map((bit) => {
    gammaString += bit
})

const gammaBinary = gammaString
const gammaDigit = parseInt(gammaBinary, 2);

const epsilonBinary = 11011010101
const epsilonDigit = parseInt(epsilonBinary, 2);

console.log(gammaDigit * epsilonDigit)
