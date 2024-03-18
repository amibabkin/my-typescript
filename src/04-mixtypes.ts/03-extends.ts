// справа от extends - допустимый набор значений, а слева - значение, которое мы проверяем
type answer_1 = 64 extends number ? true : false;

type answer_2 = number extends 64 ? true : false; // false

type answer_3 = string[] extends any ? true : false;

type answer_4 = string[] extends any[] ? true : false;

// never - отсутствие значения, any - набор всех значений, набор всех значений содержит в себе отсутствие значения
type answer_5 = never extends any ? true : false;

type answer_6 = any extends any ? true : false;

// применяется интерфейс к интерфейсу
type answer_7 = Date extends { new (...args: any[]): any } ? true : false;

// проверяется, что Date - это класс
type answer_8 = typeof Date extends { new (...args: any[]): any }
  ? true
  : false;

type T0 = typeof NaN extends number ? true : false;

type T1 = number extends any ? true : false;

type T2 = string extends "a" | "b" | "c" ? true : false;

type T3 = { getDay(): number } extends Date ? true : false;

type T4 = number | string extends string ? true : false;
