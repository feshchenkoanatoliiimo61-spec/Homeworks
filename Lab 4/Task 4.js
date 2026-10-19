'use strict';

const sum = (...args) =>{
    let temporary = 0;
    if(args.length === 0)
    {
        return 0;
    }
    else{
        
        let i = 0;
        do
        {
            temporary+= args[i];
            i++;
                
        }
        while(i < args.length);
    }
    return temporary;
}
const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);