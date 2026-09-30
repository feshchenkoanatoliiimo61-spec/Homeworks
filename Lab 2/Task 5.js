'use strict';

const rangeOdd = (start, end) => {
    const numbers = [];
    for(let i = start; i <= end; i++)
    {
        if(i % 2 !== 0) numbers[i] = i;
    }

    return numbers;
}
console.dir(rangeOdd(15, 30));