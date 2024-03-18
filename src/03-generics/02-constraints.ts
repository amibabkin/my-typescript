// Добавление требований
// у number, boolean и тд не может быть поля length, нужно сделать ограничение
// T extends - параметр должен минимально чему то соответствовать
function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

export const obj1 = { a: 1, length: 5 };

len(obj1);
