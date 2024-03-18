// Позволяют создавать компоненты, которые способны работать с различными типами, а не только с каким то одним, строго определяя его.
// Мы сами будем задавать определенные типы и контролировать весь процесс.
// Generic (общие типы)

type TypeFactory<T> = T;
type XType1 = TypeFactory<string>;
type XType2 = TypeFactory<number>;

// <T> - принимает некий T
function toArray<T>(...args: T[]): T[] {
  return args;
}
toArray<number>(1, 2, 3);
toArray("123", "123");

function head(value: string): string;
function head<T>(value: T[]): T;
function head(value: any): any {
  return value[0];
}

const head2 = <T>(args: T): T => {
  return args;
};

export interface ModelDate<T> {
  name: string;
  value: T;
}

const obj1: ModelDate<number> = {
  name: "123",
  value: 25,
};

// ===================================== PRACTICE

function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}
