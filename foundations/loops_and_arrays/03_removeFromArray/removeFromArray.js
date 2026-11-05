const removeFromArray = function(items, ...toRemove) {
    return items.filter(item => !toRemove.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
