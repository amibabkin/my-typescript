export const numbers = [1, 2, 3, 4];

const str: string[] = [];
const str2: Array<string> = [];

interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew: boolean;
  name?: string;
  [key: string]: unknown;
}

const cars: Car[] = [];
cars.push({ wheels: 3, brand: "audi", type: "sedan", isNew: true });

const arrOfArr: string[][] = []; // массив строк внутри другого массива
arrOfArr.push(["123", "456"]);

function printArr(arr: unknown[]): void {
  arr.forEach(() => {});
}
