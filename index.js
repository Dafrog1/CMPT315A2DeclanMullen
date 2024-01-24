
//index.js
const findNaNIndex = require('./findNaNIndex');
const isArrayFactorChain = require('./isArrayFactorChain');
const countNumberOfArrays = require('./countNumberOfArrays');
const uniqueFilter = require('./uniqueFilter');
const participants = require('./participants');
const winnersObject = require('./winnersObject');
const biggestLoser = require('./biggestLoser');

module.exports = {
    findNaNIndex,
    isArrayFactorChain,
    countNumberOfArrays,
    uniqueFilter,
    participants,
    winnersObject,
    biggestLoser,
};

/*
const findNaNIndex = function(inArray){
    const outArray = [];
    for(let i =0; i<inArray.length; i++){
        if(isNaN(inArray[i])){
            outArray.push(i);
        }
    }
    return outArray
}
*/
console.log(findNaNIndex([2, NaN, 8, 16, 32, NaN, 8,2]));
console.log(isArrayFactorChain([2,4,8,16,32]));
console.log(isArrayFactorChain([3,4,8,16,32]));
console.log(isArrayFactorChain([3,4,8,16,32, 68]));
console.log(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]));
console.log(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
  ];
for(let i = 0; i<matches.length; i++){
    console.log(matches[i].winner);
}

const test = [2,3,2,3,4,5,6,5];
console.log(uniqueFilter(test));

/*
const person = {name: "Chen", age: 36};
const properties = Object.keys(person);
properties.forEach(function(property){
    console.log(person[property]);
    console.log(property);
    console.log(person.name);
});
*/
console.log(participants(matches));

console.log(winnersObject(matches));

console.log(biggestLoser(matches));