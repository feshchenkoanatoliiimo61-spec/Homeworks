'use strict';

const max = (arr) =>{
    let theBiggestNumber = 0;
    if(arr.length === 0)
    {
        return 0;
    }
    else{
        let arrayIndex = 0;
        for(let i = 0; i < arr.length; i++)
        {
            arrayIndex = arr[i];

            for(let j = 0; j < arrayIndex.length; j++)
            {
                if(arrayIndex[j] > theBiggestNumber)
                {
                    theBiggestNumber = arrayIndex[j];
                }
            }
        }

    }
    return theBiggestNumber;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
