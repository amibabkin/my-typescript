interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { name: "Jane Doe", age: 32, role: "Administrator" },
  { name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { name: "Bruce Willis", age: 64, role: "World saver" },
];

// вернуть boolean, функция должна вернуть ответ на вопрос - человек это админ?
export function isAdmin(person: Person): person is Admin {
  // человек как админ
  // вернет либо false либо true
  
  // вместо админа пришёл юзер, у него нет свойства role, обращение к несуществующему свойству объекта возвращает undefined
  return (person as Admin).role !== undefined;
}

export function isUser(person: Person): person is User {
  return (person as User).occupation !== undefined;
}

export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);
