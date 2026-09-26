'use strict';

const array = [42, -7, 3.14, 0, NaN, Infinity, 'JavaScript', 'Студент', '100', true, false, true, { id: 1, role: 'admin' }, { n: 5 }, ['a', 'b', 'c'], [1, 2, 3], null, undefined, 999n, 0n, Symbol('id'), function() {}];
const colection = {
};

for(const item of array){
    const type = typeof item;

    if(Object.hasOwn(colection, type)){
        colection[type] += 1;
    }
    else{
        colection[type] = 1;
    }
}
console.dir(colection);