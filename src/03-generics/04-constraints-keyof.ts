// Сужение допустимых значений типа

// сократи набор возможных её значений до следующей сущности: обратись через keyof к тому объекту, который ты получишь на вход и возьми его ключи(создаётся union из ключей объекта)
function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}

function prop2<T>(key: keyof T, obj: T): T[keyof T] {
  return obj[key];
}

// ======================================= PRACTICE

export function keys<T extends object>(obj: T): Array<keyof T> {
  const currentKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }
  return currentKeys;
}

export function values<T extends object>(obj: T): Array<T[keyof T]> {
  const currentValues = [];
  for (let key in obj) {
    currentValues.push(obj[key]);
  }
  return currentValues;
}
