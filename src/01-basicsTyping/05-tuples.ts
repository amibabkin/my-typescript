// кортеж - [string, string][]
// Кортежи (Tuples) также, как и массивы, представляют набор элементов, для которых уже заранее известен тип.
// В отличие от массивов кортежи могут хранить значения разных типов
const pairs: [string, string][] = [
  ["123", "456"],
  ["abcd", "ifg"],
  ["abcd", "wda"],
];

const data: [boolean, number, string] = [true, 1, "123"];

// csv - данные разделенные запятой

const doc: [string, string, number, Date][] = [];

type MyTuple = [
  firstName: string,
  lastName: string,
  age: number,
  dateBirth: Date
];
