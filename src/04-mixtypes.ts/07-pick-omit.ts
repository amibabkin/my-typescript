export {};
// в нашем объекте могут быть ключи только типа string, значения будут типа any
type Name = Record<string, any>;

type WellKnownBrands = "apple" | "microsoft" | "hp";

type NameBrands = Record<WellKnownBrands, number>;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type SimpleTodo = Pick<Todo, "id" | "title">;

type SimpleTodo2 = Omit<Todo, "id">;

type Regions = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

type CountriesByRegion = Record<Regions, string[]>;

const visitedCountries: CountriesByRegion = {
  Africa: ["Egypt", "Angola", "Tunis"],
  America: ["Mexico"],
  Asia: ["India"],
  Europe: ["Spain", "England", "Hungary"],
  Oceania: [],
};
