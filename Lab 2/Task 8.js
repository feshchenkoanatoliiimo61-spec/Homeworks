'use strict';

const createUser = (userName, userCity) => {
    const user = {
        name: userName,
        city: userCity
    }
    return console.dir(user);
}

createUser("Avrelin Bono", "Sydnei");

