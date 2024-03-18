"use strict";
// перегрузка функций, должны несколько раз описать одну и ту же функцию
function add(a, b) {
    return a + b;
}
add(1, 1);
function asyncSum(a, b, c) {
    const result = a + b;
    if (c) {
        return c(result);
    }
    return Promise.resolve(result);
}
function head(value) {
    return value[0];
}
