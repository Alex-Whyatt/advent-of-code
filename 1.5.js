let fs = require("fs");

const inputNumbers = fs
    .readFileSync("inputs/input1.txt", { encoding: "utf-8"})
    .split("\n")
    .filter((x) => Boolean(x))
    .map(Number);
    
let increaseCount = 0;

for (let i = 0; i < inputNumbers.length; i++) {
    if ((inputNumbers[i+1] + inputNumbers[i+2] + inputNumbers[i+3]) > (inputNumbers[i] + inputNumbers[i+1] + inputNumbers[i+2])) {
        increaseCount++;
    } 
};

console.log(increaseCount)