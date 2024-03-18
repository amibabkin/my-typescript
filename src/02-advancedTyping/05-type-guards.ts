// защита типов, в файле 04-narrowing всё есть защита типов

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// функция предикат, наш параметр это Fish, pet is Fish - утверждение, защитник
function isFish(pet: Fish | Bird): pet is Fish {
  // pet будет Fish, у неё будет swim, который не будет равен undefined, если вернёт false, то pet не является Fish
  return (pet as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

function move2(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim();
  }
  return animal.fly();
}

// ====================================================== PRACTICE

interface Order {
  address: string;
}
interface TelephoneOrder extends Order {
  callerNumber: string;
}
interface InternetOrder extends Order {
  email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

function isAnInternetOrder(order: PossibleOrders): order is InternetOrder {
  return (order as TelephoneOrder).callerNumber !== undefined;
}

function isAnInternetOrder2(order: PossibleOrders): order is InternetOrder {
  return !!order && "email" in order;
}

function isATelephoneOrder(order: PossibleOrders): order is TelephoneOrder {
  return (order as InternetOrder).email !== undefined;
}

function makeOrder(order: PossibleOrders) {
  if (isAnInternetOrder(order)) {
    console.log(order.email);
  } else if (isATelephoneOrder(order)) {
    console.log(order.callerNumber);
  }
}
