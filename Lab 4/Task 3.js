'use strict';

const sum = (...args) =>{
    let i = 0;
    let temporary = 0;
    while(i < args.length)
    {
        temporary+= args[i];
        i++;
    }
    return temporary;
}
const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

