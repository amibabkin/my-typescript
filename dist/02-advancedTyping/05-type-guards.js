"use strict";
// защита типов, в файле 04-narrowing всё есть защита типов
// функция предикат, наш параметр это Fish, pet is Fish - утверждение, защитник
function isFish(pet) {
    // pet будет Fish, у неё будет swim, который не будет равен undefined, если вернёт false, то pet не является Fish
    return pet.swim !== undefined;
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
function move2(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
function isAnInternetOrder(order) {
    return order.callerNumber !== undefined;
}
function isAnInternetOrder2(order) {
    return !!order && "email" in order;
}
function isATelephoneOrder(order) {
    return order.email !== undefined;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
