"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
function render(document) {
    console.log(document);
}
function calculateIncome(tax, year) {
    if (tax > 50000) {
        return tax * 50;
    }
    return `income is ${tax % 50}`;
}
calculateIncome(500000, 2019);
let employee = { id: 1, name: "aakash" };
console.log(employee);
let weight;
const textBox = {
    drag: () => { },
    resize: () => { },
};
//# sourceMappingURL=index.js.map