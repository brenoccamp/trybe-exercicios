"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circleArea = exports.trapeze = exports.lozenge = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Hello ${name}!`;
}
exports.greeter = greeter;
function personAge(name, age) {
    return `${name} has ${age} years old!`;
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
function square(side) {
    return side ** 2;
}
exports.square = square;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
function lozenge(D, d) {
    return (D * d) / 2;
}
exports.lozenge = lozenge;
function trapeze(height, B, b) {
    return ((B + b) * height) / 2;
}
exports.trapeze = trapeze;
function circleArea(r, pi = 3.14) {
    return (r ** 2) * pi;
}
exports.circleArea = circleArea;
