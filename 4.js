let fs = require("fs");
const resultsPattern = /.,|..,/
const bingoInput = fs.readFileSync("inputs/input4.txt", "utf8").split("\n");
const resultNumbers = bingoInput.filter((results) => results.match(resultsPattern));
cardSubArray = []
newARR = []

// Formatting Stuff

function getcardSubArray(cards) {
    cards.filter((sections) => { 
        sections !== '' && !sections.match(resultsPattern)
    });
    cards.shift();
    for (let i = 0; i < cards.length; i++) {
        cardSubArray[i] = cards.slice(i, i + 5).filter((s) => s)
        for(let k = 0; k < cardSubArray[i].length; k++) {
            cardSubArray[i][k] = cardSubArray[i][k].split(' ').filter(s => s)
        };
    };
    return cardSubArray
}



cardSubArray = getcardSubArray(bingoInput)

// Logic stuff

 getcardSubArray(bingoInput)

 console.log(cardSubArray)



