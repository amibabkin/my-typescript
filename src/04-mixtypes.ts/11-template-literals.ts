export {};
// Lowercase, Uppercase, Uncapitalize

type Side = "top" | "left" | "bottom" | "right";

type Margin1 = `margin-${Side}`;

type Margin2 = `margin${Capitalize<Side>}`;

type Margin3 = `margin${"" | Side}`;

type Direction = "down" | "left" | "right" | "up";

type Position = "top" | "bottom";

type Entry = "in" | "out";

type FadeClassName = `fade${Capitalize<Entry>}${Capitalize<
  "" | Direction | Position
>}`;

interface Car {
  brand: string;
  model: string;
  year: number;
}

type CarFactory = {
  [key in keyof Car as `set${Capitalize<key>}`]: (
    car: Car,
    value: Car[key]
  ) => void;
};

// =========================================== PRACTICE

type Style = "none" | "dotted" | "dashed" | "solid";

type Color = "Red" | "Green" | "Blue" | "Black" | "White";

type BorderStyle = `${Style} ${Lowercase<Color>}`;

let borderStyle: BorderStyle = "solid red";

let borderStyle2: BorderStyle = "dashed white";
