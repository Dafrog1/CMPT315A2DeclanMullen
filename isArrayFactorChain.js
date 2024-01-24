const isArrayFactorChain = function(testChain){
    for(let i = testChain.length-1; i>0; i--){
        //still need length -1
        for(let j = i-1; j>-1;j-- ){
            if(testChain[i]%testChain[j] != 0){
                console.log(i);
                console.log(j);
                return false;
            }
        }

    }
    return true;
}

module.exports = isArrayFactorChain;