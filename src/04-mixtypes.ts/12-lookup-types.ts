type Obj = {
  a: string,
  b: number
}

type Result1 = {
  [U in keyof Obj]: {name: U, value: Obj[U]}
}

const obj1: Result1 = {
  a: {
    name: "a",
    value: "hello"
  },
  b: {
    name: "b",
    value: 20
  }
}

type Result2 = {
  [U in keyof Obj]: {name: U, value: Obj[U]}
}[keyof Obj]

const obj2: Result2 = {
  name: "a",
  value: 'hello'
}

//--------------------------------------------------

export interface Person {
  name: string
  age: number
  country: string
}

const v1: Person['name' | 'age'] = 22 
