const findNaNIndex = function(inArray){
    const outArray = [];
    for(let i =0; i<inArray.length; i++){
        if(isNaN(inArray[i])){
            outArray.push(i);
        }
    }
    return outArray
}

module.exports = findNaNIndex;