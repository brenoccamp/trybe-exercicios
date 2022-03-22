export function greeter(name: string): string {
  return `Hello ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} has ${age} years old!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function lozenge(D: number, d: number): number {
  return (D * d) / 2;
}

export function trapeze(height: number, B: number, b: number): number {
  return ((B + b) * height) / 2;
}

export function circleArea(r: number, pi: number = 3.14): number {
  return (r ** 2) * pi;
}