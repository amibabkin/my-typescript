// Области видимости типов дженерика

export function TuplePairCreator<T>(a: T) {
  return function <U>(b: U): [T, U] {
    return [a, b];
  };
}

// ts помнит что мы передали число
const a = TuplePairCreator(1);
const b = a(3);

// ========================================= PRACTICE
// ожидаем, что дженерик это что то внутри самого массива
export function createMap<T>(list: T[]) {
  return function <U>(cb: (x: T) => U): U[] {
    const result = [];

    for (let el of list) {
      result.push(cb(el));
    }
    return result;
  };
}

const mapNums = createMap([1, 2, 3]);
const result = mapNums((num) => num * 2);
