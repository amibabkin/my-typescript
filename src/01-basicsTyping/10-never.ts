// function err(msg: string): never {
//   throw new Error(msg)
// }

// Exhaustiveness checking
export interface Circle {
  kind: "circle"
  radius: number
}

export interface Square {
  kind: "square"
  sideLength: number
}

export interface Triangle {
  kind: "triangle";
  sideLength: number;
}

export type Shape = Circle | Square | Triangle

function getArea(shape: Shape) {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // error
      const exhaustiveCheck: never = shape
      return exhaustiveCheck
  }
}

// union
// never - пустой элемент, потеряется

export type MyExclude<T, U> = T extends U ? never : T

export type ExcludeExample = MyExclude<'a' | 'b', 'a'>