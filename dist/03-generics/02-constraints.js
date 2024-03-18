"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj1 = void 0;
// Добавление требований
// у number, boolean и тд не может быть поля length, нужно сделать ограничение
// T extends - параметр должен минимально чему то соответствовать
function len(arg) {
    return arg.length;
}
exports.obj1 = { a: 1, length: 5 };
len(exports.obj1);
