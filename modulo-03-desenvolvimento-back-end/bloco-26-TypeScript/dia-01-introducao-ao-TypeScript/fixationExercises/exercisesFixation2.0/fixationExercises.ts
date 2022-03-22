export function greeter(name: string) {
  return `Hello ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} has ${age} years old!`;
}

export function add(x: number, y: number) {
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