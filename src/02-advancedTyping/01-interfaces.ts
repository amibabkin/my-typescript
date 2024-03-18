interface User {
  readonly email: string; // обязательный параметр, который пользователь не может поменять
  readonly login: string;
  password: string;
}

// расширение интерфейса

interface User {
  isOnline?: boolean;
}

// объединение нескольких интерфейсов в единый

interface Person {
  readonly firstName: string;
  phone?: string;
}

interface Employee extends User, Person {
  contractStart: Date;
  said(): void;
  code: () => void;
}
export function a() {}
