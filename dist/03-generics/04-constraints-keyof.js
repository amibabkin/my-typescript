"use strict";
// Сужение допустимых значений типа
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = void 0;
// сократи набор возможных её значений до следующей сущности: обратись через keyof к тому объекту, который ты получишь на вход и возьми его ключи(создаётся union из ключей объекта)
function prop(key, obj) {
    return obj[key];
}
function prop2(key, obj) {
    return obj[key];
}
// ======================================= PRACTICE
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
function values(obj) {
    const currentValues = [];
    for (let key in obj) {
        currentValues.push(obj[key]);
    }
    return currentValues;
}
exports.values = values;
