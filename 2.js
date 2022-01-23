let fs = require("fs");
let downDepth = /down/;
let downCommands = [];
let upDepth = /up/;
let upCommands = [];
let forwardHorizontal = /forward/;
let forwardCommands = [];

const reducer = (previousValue, currentValue) => previousValue + currentValue;
const inputCommands = fs
    .readFileSync("inputs/input2.txt", { encoding: "utf-8"})
    .split("\n")
    .forEach((x) => {
        let inputSplit = x.split(" ")
        if (inputSplit[0].match(downDepth)) {
            downCommands.push(inputSplit[1])
        } else if (inputSplit[0].match(upDepth)) {
            upCommands.push(inputSplit[1])
        } else if (inputSplit[0].match(forwardHorizontal)) {
            forwardCommands.push(inputSplit[1])
        } else {
            console.log(x)
        }
    })

const fwInt = forwardCommands.map(Number)
const forwardTotal = fwInt.reduce(reducer)

const dcInt = downCommands.map(Number)
const downTotal = dcInt.reduce(reducer)

const ucInt = upCommands.map(Number)
const upTotal = ucInt.reduce(reducer)

console.log((upTotal - downTotal) * forwardTotal)
