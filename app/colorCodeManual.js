const { MajorColorNames, MinorColorNames } = require("./colors");
const { getColorFromPairNumber } = require("./getColor");


function getManual(){
    console.log("----Color Code Manual---")
    for( let i=1; i<=MinorColorNames.length* MajorColorNames.length; i++){
        let pair = getColorFromPairNumber(i);
        console.log(`Color Code: ${i},--->Colors: ${pair}`);
       
    }
}

module.exports = {
    getManual
}