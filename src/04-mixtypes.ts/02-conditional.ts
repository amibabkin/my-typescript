// условные типы

export const x = 16;

const isXNegative = x >= 0 ? "no" : "yes";

interface StringRecord {
  [key: string]: string;
}

interface DateRecord {
  [key: string]: Date;
}

// если Т это строка
type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MyRecord<string>;

const obj1: Obj1 = {
  a: "123",
};


interface Animal {
  live(): void
}

interface Dog extends Animal {
  woof(): void
}

interface Bird {
  fly(): void
}

type Example1 = Dog extends Bird ? number : string

type Example2 = Dog extends Animal ? number : string