//Реалізація циклу який проходиться по масиву і збільшує відповідне значення в об'єкті
'use strict';
const firstArray = [42, -7, 3.14, 0, NaN, Infinity, 'JavaScript', 'Студент', '100', true, false, true, { id: 1, role: 'admin' }, { n: 5 }, ['a', 'b', 'c'], [1, 2, 3], null, undefined, 999n, 0n, Symbol('id'), function() {}];
const typesColection = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    bigint: 0
};
for(const item of firstArray){
    const type = typeof item; // тимчасове поле, яке зберігатиме тип елемента з масива
    if(type === 'number')
    {
        typesColection.number+=1;
    }
    if(type === 'string')
    {
        typesColection.string+=1;
    }
    if(type === 'boolean')
    {
        typesColection.boolean+=1;
    }
    if(type === 'object')
    {
        typesColection.object+=1;
    }
    if(type === 'bigint')
    {
        typesColection.bigint+=1;
    }
}
console.dir(typesColection);
