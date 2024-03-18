// Aliases
// 1. primitives, unions - их создание; пересечение, комбинация (комбинация разных кортежей)
// 2. раннее заявленный тип не расширяется как интерфейс

// Interfaces
// 1. когда мы хотим расширять интерфейс в будущем
// 2. для классов создаём только интерфейсы

type Product = {
  price: string;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: string;
  brand: string;
};

type Car = Product &
  Vehicle & {
    type: string;
    model: string;
  };

interface IProduct {
  price: string;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: string;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}
