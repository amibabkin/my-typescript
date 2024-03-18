"use strict";
// Области видимости типов дженерика
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = exports.TuplePairCreator = void 0;
function TuplePairCreator(a) {
    return function (b) {
        return [a, b];
    };
}
exports.TuplePairCreator = TuplePairCreator;
// ts помнит что мы передали число
const a = TuplePairCreator(1);
const b = a(3);
// ========================================= PRACTICE
// ожидаем, что дженерик это что то внутри самого массива
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num * 2);
