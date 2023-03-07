//module for the code manual

const { MajorColorNames, MinorColorNames } = require("./colors");
const { getColorFromPairNumber } = require("./getColorPair");


function getManual(){
    console.log("----Color Code Manual---")
    for( let i=1; i<=MinorColorNames.length* MajorColorNames.length; i++){
        let pair = getColorFromPairNumber(i);
        console.log(`Color Code: ${i},  |  Colors Combination: ${pair}`);
       
    }
}

module.exports = {
    getManual
}