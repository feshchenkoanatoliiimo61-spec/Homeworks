'use strict';

const average = (a, b) => {
    return (a + b) / 2;
}

const square = (x) => {
    return x ** 2;
}

const cube = (x) => {
    return x ** 3;
}

const calculate = () =>{
    const numbersArray = [];
    for(let i = 0; i <= 9; i++){
        let result = average(cube(i), square(i));
        numbersArray[i] = result;
    }

    return numbersArray;
}

console.log(calculate());
