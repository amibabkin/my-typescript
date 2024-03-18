"use strict";
// Позволяют создавать компоненты, которые способны работать с различными типами, а не только с каким то одним, строго определяя его. Мы сами будем задавать определенные типы и контролировать весь процесс.
// Generic (общие типы)
Object.defineProperty(exports, "__esModule", { value: true });
// <T> - принимает некий T
function toArray(...args) {
    return args;
}
toArray(1, 2, 3);
toArray("123", "123");
function head(value) {
    return value[0];
}
const head2 = (args) => {
    return args;
};
const obj1 = {
    name: "123",
    value: 25,
};
// ===================================== PRACTICE
function append(el, list) {
    return list.concat(el);
}
