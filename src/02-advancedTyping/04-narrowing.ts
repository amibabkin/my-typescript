// сужение типов

function example1(str: string | string[] | null) {
  // if(typeof str === 'object')
  // if(Array.isArray(str))

  if (str && typeof str === "object") {
    // отбросил null за счёт такой проверки
  }
}

function example2(x: number[] | Date) {
  if (x instanceof Date) {
    x.getDay();
  } else {
    x.concat([]);
  }
}

type fish = { swim: () => void };
type bird = { fly: () => void };

export function move(animal: fish | bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly;
}
