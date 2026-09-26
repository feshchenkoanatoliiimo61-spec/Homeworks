'use strict';

const inc = function(number){
    return number + 1;
}
const firstNumber = 13;
const totalNumber = inc(firstNumber);

console.dir({firstNumber, totalNumber});