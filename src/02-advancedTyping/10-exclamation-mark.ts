let word: string | null = null;

export const num = 10;

if (num > 5) {
  word = "123";
}

// ! говорит о том, что мы точно знаем, что в word есть значение, использовать лучше только для тестирования
console.log(word!.toLocaleLowerCase());

interface Person {
  name: string;
  age: number;
  sex: "male" | "female";
}

const people: Person[] = [
  {
    name: "Anna",
    age: 20,
    sex: "female",
  },
  {
    name: "John",
    age: 30,
    sex: "male",
  },
  {
    name: "Anna",
    age: 25,
    sex: "female",
  },
  {
    name: "Anna",
    age: 60,
    sex: "female",
  },
];

const femalePeople = people.find((person) => person.sex === "female")!;
