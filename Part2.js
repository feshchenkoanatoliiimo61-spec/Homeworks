'use strict';
const inc2 = function(obj){
    obj.n += 1;
}

const object = {
    n: 5
}

inc2(object);
console.dir(object);