"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = void 0;
function keys(obj) {
    const currentKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            currentKeys.push(key);
    }
    return currentKeys;
}
exports.keys = keys;
