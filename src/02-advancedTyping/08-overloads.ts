// перегрузка функций, должны несколько раз описать одну и ту же функцию

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

add(1, 1);

type asyncCb = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, c: asyncCb): number;
function asyncSum(a: number, b: number, c?: asyncCb): any {
  const result = a + b;
  if (c) {
    return c(result);
  }
  return Promise.resolve(result);
}

// ====================================================== PRACTICE

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}
