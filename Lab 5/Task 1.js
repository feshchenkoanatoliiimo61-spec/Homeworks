'use strict';

const seq = (...args) =>{
    return (func) =>{
        if(typeof func === 'number')
        {
            args.reverse();
            return args.reduce((number, func) => func(number), func);
        }

        return seq(...args, func);
    }
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));