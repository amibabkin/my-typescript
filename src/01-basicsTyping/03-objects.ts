interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew: boolean;
  name?: string;
  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: "BMW",
  type: "Sedan",
  isNew: false,
};
// =================================Объекты как параметры функции

function print(obj: { a: string; b: string }): void {}

const obj1 = {
  a: "1",
  b: "2",
};
print(obj1);

const obj2 = {
  a: "1",
  b: "2",
  c: "3",
};
print(obj2); // Ошибки не будет, так как { a: string; b: string } - является минимально нужным набором

function printName(obj: { firstName: string; lastName?: string }): void {
  console.log(obj.firstName);

  if (obj.lastName) {
    console.log(obj.lastName.toLocaleUpperCase()); // опциональные параметры нужно проверять
  }
}

printName({ firstName: "a" });

printName({ firstName: "a", lastName: "b" });

// ====================================================== PRACTICE

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
  role: string;
}

export function printUA(obj: { login: string; email: string }): void {
  if ((obj.login.length > 0, obj.email.length > 0)) {
    console.log(`Hello, ${obj.login}`);
  }
}
