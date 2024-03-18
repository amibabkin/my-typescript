// оператор

function fromPair(pair: [string, string]) {
  const [key, value] = pair;

  return {
    key: value,
  };
}
// получить значение первого параметра
// infer определяет тип переданной функции, взяли первый аргумент(first), определили его через оператор infer,
// положили его значение в отдельный алиас(First)
type FirstArg<T> = T extends (first: infer First, ...arg: any[]) => any
  ? First
  : never;

const myPair: FirstArg<typeof fromPair> = ["myKey", "myValue"];

fromPair(myPair);
