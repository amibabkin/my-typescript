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

// ------------------------------------
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First1<T extends unknown[]> = T extends [] ? never : T[0]
type First2<T extends unknown[]> = T extends [infer Item, ...unknown[]] ? Item : never

type head1 = First1<arr1> // expected to be 'a'
type head2 = First2<arr2> // expected to be 3