type Item = {a: string, b: number, c: boolean}

type MyPartial<T> = {
  [P in keyof T]?: T[P] 
}
type PartialItem = MyPartial<Item>

type MyPick<T, G extends keyof T> = {
  [P in G]: T[P]
} 
type PickItem = MyPick<Item, 'a'>

type MyOmit<T, G> = {
  [P in keyof T as P extends G ? never : P]: T[P]
}
type OmitItem = MyOmit<Item, 'a'>

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P] 
}
interface Todo {
  title: string
  description: string
}
const todo: MyReadonly<Todo> = {
  title: 'hello',
  description: 'foo'
}
// todo.description = 'foo1'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}
type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}