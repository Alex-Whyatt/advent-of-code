let fs = require("fs");
let downCommand = /down/;
let depth = 0;
let upCommand = /up/;
let forwardHorizontal = /forward/;
let forwardCommands = 0;
let aim = 0;

const inputCommands = fs
    .readFileSync("inputs/input2.txt", { encoding: "utf-8"})
    .split("\n")
    .forEach((x) => {
        let inputSplit = x.split(" ")
        let direction = inputSplit[0]
        let commandValue = Number(inputSplit[1])

        if (direction.match(downCommand)) {          
            aim += commandValue
        } else if (direction.match(upCommand)) {
            aim -= commandValue
        } else if (direction.match(forwardHorizontal)) {
            forwardCommands += commandValue

            if (aim !== 0) {
                depth += aim * commandValue
            }
        } else {
            throw new Error(`not sure what this is --> ${direction}`)
        }
    })

console.log(depth * forwardCommands)

console.log(depth)
console.log(forwardCommands)


