'use strict';

const range = (start, end) => {
    const numbers = [];
    for(let i = start; i <= end; i++)
    {
        numbers[i] = i;
    }

    return numbers;
}
console.dir(range(15, 30));
