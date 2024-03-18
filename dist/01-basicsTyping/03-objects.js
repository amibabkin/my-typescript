"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printUA = void 0;
const car = {
    wheels: 4,
    brand: "BMW",
    type: "Sedan",
    isNew: false,
};
// =================================Объекты как параметры функции
function print(obj) { }
const obj1 = {
    a: "1",
    b: "2",
};
print(obj1);
const obj2 = {
    a: "1",
    b: "2",
    c: "3",
};
print(obj2); // Ошибки не будет, так как { a: string; b: string } - является минимально нужным набором
function printName(obj) {
    console.log(obj.firstName);
    if (obj.lastName) {
        console.log(obj.lastName.toLocaleUpperCase()); // неопциональные параметры нужно проверять
    }
}
printName({ firstName: "a" });
printName({ firstName: "a", lastName: "b" });
function printUA(obj) {
    if ((obj.login.length > 0, obj.email.length > 0)) {
        console.log(`Hello, ${obj.login}`);
    }
}
exports.printUA = printUA;
