export function sum(a: number, b: number): number {
  return a + b;
}

sum(2, 2);

const sum2 = (a: number, b: number): number => a + b;

function log(name: string, userID?: string): void {
  // void говорит, что функция завершится
  console.log(name, userID || "anonym");
}

log("abcd");

function crash(): never {
  // функция никогда не завершится
  throw new Error("crash");
}

function average(...arr: number[]) {} // неизвестно сколько значений придет, spread - всегда массив

// ====================================================== PRACTICE

function slice(str: string, start: number, end?: number) {
  let newStr: string = "";

  let lastIndex: number;

  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }

  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }

  return newStr;
}
