"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
sum(2, 2);
const sum2 = (a, b) => a + b;
function log(name, userID) {
    console.log(name, userID || "anonym");
}
log("abcd");
function crash() {
    throw new Error("crash");
}
function average(...arr) { }
// ====================================================== PRACTICE
function slice(str, start, end) {
    let newStr = "";
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
