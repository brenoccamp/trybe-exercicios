"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise = __importStar(require("./fixationExercises"));
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);
console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);
console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Área de um losango que tem D=32cm e d=18cm: ${Exercise.lozenge(32, 18)}cm²`);
console.log(`Área de um losango que tem D=200cm e d=50cm: ${Exercise.lozenge(200, 50)}cm²`);
console.log(`Área de um losango que tem D=75cm e d=25cm: ${Exercise.lozenge(75, 25)}cm²`);
console.log(`Área de um trapézio que tem B = 100cm, b = 70cm, height: 50cm: ${Exercise.trapeze(50, 100, 70)}cm²`);
console.log(`Área de um trapézio que tem B = 75cm, b = 50cm, height: 35cm: ${Exercise.trapeze(35, 75, 50)}cm²`);
console.log(`Área de um trapézio que tem B = 150cm, b = 120cm, height: 80cm: ${Exercise.trapeze(80, 150, 120)}cm²`);
console.log(`Área de um círculo de raio igual 25cm: ${Exercise.circleArea(25)}`);
console.log(`Área de um círculo de raio igual 100cm: ${Exercise.circleArea(100)}`);
console.log(`Área de um círculo de raio igual 12.5cm: ${Exercise.circleArea(12.5)}`);
