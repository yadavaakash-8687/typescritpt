// let age: number = 24;
// if (age < 50) {
//   age += 10;
// }
// console.log(age);

let sales: number = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;

// let level;
// level = 1;
// level = "a";

function render(document: any) {
  console.log(document);
}

function calculateIncome(tax: number, year: number): any {
  if (tax > 50000) {
    return tax * 50;
  }
  return `income is ${tax % 50}`;
}
calculateIncome(500000, 2019);

let employee: { id: number; readonly name: string } = { id: 1, name: "aakash" };

// employee.name = "vikas";
console.log(employee);

let weight: number & string;

// intersection types

type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};

// declearing a intersection

type UiWidget = Draggable & Resizeable;

const textBox: UiWidget = {
  drag: () => {},
  resize: () => {},
};
