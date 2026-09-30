'use strict';

const contacts = [
    {name: "Arest Dion", phone: "+380702345518"},
    {name: "Kelm Ohoni", phone: "+380436903722"},
    {name: "Frank Oshi", phone: "+1450338991"}
];

const findPhoneByName = (name) =>{
    for(const obj of contacts)
    {
        if(name === obj.name){
            console.log("A contact is found");
            return console.dir(obj.phone);
        }
    }
}

findPhoneByName("Arest Dion");