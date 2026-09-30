'use strict';

const fn = function() {
    const firstContainer = {
        name: "Other"
    }
    let secondContainer = {
        name: "Another"
    }

    firstContainer.name = "This"; // поле змінюється в об'єкті
    secondContainer.name = "These";// поле також змінюється
    console.log(firstContainer.name, secondContainer.name);

    //firstContainer = {name: "Those"} Перепризначити об'єкт неможливо через те що він const
    secondContainer = {name: "That"} // Перепризначити об'єкт можна бо він зберігається в звичайній змінній
}

fn();