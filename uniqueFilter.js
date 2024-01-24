const uniqueFilter = function(filterThis){
    //array.indexOf(value) === index;

    return filterThis.filter((value, index, array) => array.indexOf(value) === index);
}
module.exports = uniqueFilter;