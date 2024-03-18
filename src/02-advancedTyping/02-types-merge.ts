type Union1 = "a" | "b" | "c" | "d";

type Union2 = "a" | "i" | "f" | "d";

type Union3 = Union1 | Union2; // содержит все типы

type Union4 = Union1 & Union2; // содержит только повторяющиеся типы

// расширение типов, раннее заявленный тип не расширяется

type Union5 = { a: string; b: string; c: number } & {
  a: string;
  t: boolean;
  z: null;
};

const man: Union5 = {
  a: "ttt",
  b: "ggg",
  c: 2,
  t: true,
  z: null,
};

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Person = {
  readonly firstName: string;
  phone?: string;
};

type Employee = {
  contractStart: Date;
  said(): void;
  code: () => void;
} & User &
  Person;
