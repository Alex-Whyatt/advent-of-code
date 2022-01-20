let fs = require("fs");

const inputNumbers = fs
    .readFileSync("input.txt", { encoding: "utf-8"})
    .split("\n")
    .filter((x) => Boolean(x))
    .map(Number);

let increaseCount = 0;

for (let i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i+1] > inputNumbers[i]) {
        increaseCount++;
    } 
};

console.log(increaseCount)