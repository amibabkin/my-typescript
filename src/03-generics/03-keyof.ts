type WindowProp = keyof Window;

const myValue: WindowProp = "ontoggle";

interface PC {
  brand: string;
  year: string;
}

type Tip1 = keyof PC; // year | brand

const val1: Tip1 = "year";

type Tup1 = keyof [string, number];

export const val2: Tup1 = "0";

// В TypeScript существует возможность выводить все публичные,
// не статические, принадлежащие типу ключи и на их основе создавать литеральный объединенный тип (Union).
// Для получения ключей нужно указать оператор keyof, после которого указывается тип, чьи ключи будут объединены
// в тип объединение keyof Type.
// Оператор keyof может применяться к любому типу данных.

type AliasType = { f1: number; f2: string };

interface IInterfaceType {
  f1: number;
  f2: string;
}

// class ClassType {
//   f1: number;
//   f2: string;
// }

let v1: keyof AliasType; // v1: "f1" | "f2"
let v2: keyof IInterfaceType; // v2: "f1" | "f2"
// let v3: keyof ClassType; // v3: "f1" | "f2"
