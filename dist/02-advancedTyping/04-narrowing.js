"use strict";
// сужение типов
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = void 0;
function example1(str) {
    // if(typeof str === 'object')
    // if(Array.isArray(str))
    if (str && typeof str === "object") {
        // отбросил null за счёт такой проверки
    }
}
function example2(x) {
    if (x instanceof Date) {
        x.getDay();
    }
    else {
        x.concat([]);
    }
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly;
}
exports.move = move;
