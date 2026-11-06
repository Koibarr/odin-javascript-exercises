const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0){
        return `ERROR`;
    }

    ranges = [num1, num2];
    ranges.sort();
    totalSum = 0;
    for(let i = ranges[0]; i <= ranges[1]; i++){
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;