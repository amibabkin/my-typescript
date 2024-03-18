import { sum } from "../01-basicsTyping/02-functions";

let str = "1234";

type X = typeof str;

type Fn = typeof sum;

const sum2: Fn = (a, b) => a - b;

// утилита ReturnType, Fn - определи тип функции, ReturnType - определи, что она возвращает
type ReturnFn = ReturnType<typeof sum>;
