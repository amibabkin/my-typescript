"use strict";
// union позволяет создавать типы для узких значений
const x = "loading";
function printId(id) {
    if (typeof id === "string")
        console.log(id.toLocaleUpperCase()); // сужение типов
    else
        console.log(id);
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log(person.join(" "));
        return 1;
    }
    else {
        console.log(person);
        return person;
    }
}
function gradeDeveloper(obj, newLevel) {
    obj.level = newLevel;
    return obj;
}
