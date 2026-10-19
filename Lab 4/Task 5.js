'use strict';

const sum = (...args) =>{
    let result = (acc, crr, i = 0) => (i ++, acc + crr);
    if(args.length === 0){
        return 0;
    }
    else{
        return args.reduce(result);
    }
    
}

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);