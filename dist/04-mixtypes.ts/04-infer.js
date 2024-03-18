"use strict";
// оператор
function fromPair(pair) {
    const [key, value] = pair;
    return {
        key: value,
    };
}
const myPair = ["myKey", "myValue"];
fromPair(myPair);
