export {};
// Доступ по индексу
interface DataModel {
  title: string;
  id: number;
  elements: {
    header: {
      brand: string;
      type: string;
    };
    footer: {
      brand: string;
      model: string;
    };
  };
}

type T1 = DataModel["elements"]["footer"];

type MyTuple = [number, string, ...string[]];

type T2 = MyTuple[1];

const size = ["small", "medium", "large"] as const;

type T3 = typeof size[number]; // получаем union
