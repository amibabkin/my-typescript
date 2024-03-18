// union позволяет создавать типы для узких значений

type Status = "ok" | "loading" | "error";

const x: Status = "loading";

function printId(id: number | string): void {
  if (typeof id === "string")
    console.log(id.toLocaleUpperCase()); // сужение типов
  else console.log(id);
}

function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log(person.join(" "));
    return 1;
  } else {
    console.log(person);
    return person;
  }
}

// ====================================================== PRACTICE

type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

function gradeDeveloper(obj: Developer, newLevel: Level): Developer {
  obj.level = newLevel;
  return obj;
}
