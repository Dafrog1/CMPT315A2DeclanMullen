const countNumberOfArrays = function(inArr){
    let count = 0;
    for(let i = 0; i<inArr.length; i++){
        if(Array.isArray(inArr[i])){
            count++;
        }
    }
    return count;
}

module.exports = countNumberOfArrays;