export {};

// утилиты
// Exclude - исключи
// вычитает из "a" | "b" | "c" - "a"
type T0 = Exclude<"a" | "b" | "c", "a">;

type T1 = Exclude<"a" | "b" | "c", "a" | "b" | "d">;

type Status = "client Error" | "server Error" | 200 | 401;

type NumberStatus = Exclude<Status, string>;

// Extract - извлеки
type T00 = Extract<"a" | "b" | "c", "a">;

type T10 = Extract<"a" | "b" | "c", "a" | "b" | "d">;

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sex: "male" | "female";
}
// keyof берёт ключи и делает из них юнион

type PersonName = Extract<keyof Person, "firstName" | "lastName">;

// NonNullable - выбрасывает пустые значения
type T01 = NonNullable<string | number | undefined>;

export function keys<T extends object>(obj: T): Extract<keyof T, string>[] {
  const currentKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }
  return currentKeys;
}

// export function keys<T extends object>(obj: T): Array<keyof T> {
//   const currentKeys = [];
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) currentKeys.push(key);
//   }
//   return currentKeys;
// }

type Computer = {
  brand: string;
  year: number;
  isAvailable: boolean;
};

type T02 = Extract<keyof Computer, string>;

type Computer2 = {
  brand: string;
  year: number;
  isAvailable: boolean;
};

type T12 = Exclude<keyof Computer, string>;
