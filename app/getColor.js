//modules to get the color names using the color code

const {MajorColorNames, MinorColorNames,ColorPair } = require('./colors');

function getColorFromPairNumber(pairNumber)
{
	let minorSize = MajorColorNames.length;
	let majorSize = MinorColorNames.length;
	
	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new ColorPair();
	pair.majorColor = MajorColorNames[majorIndex];
	pair.minorColor = MinorColorNames[minorIndex];
	return pair;
}

module.exports =  {
    getColorFromPairNumber
}