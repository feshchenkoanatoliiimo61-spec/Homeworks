"use strict";

const array = () =>{
    const newArray = new Array();
    const array = (item) => newArray[item];
    
    array.push = function (item) {
        return newArray.push(item);
    };

    array.pop = function () {
        return newArray.pop();
    };

    return array;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());