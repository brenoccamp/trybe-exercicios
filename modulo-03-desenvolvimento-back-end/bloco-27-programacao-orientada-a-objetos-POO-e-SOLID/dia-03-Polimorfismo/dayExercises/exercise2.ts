import Person from "./exercise1";
import { Enrollable } from "./interfaces";

export default class Employee extends Person implements Enrollable {
  constructor(name: string, age: number, public enrollment: string) {
    super(name, age);

    this.enrollment = enrollment;
  }

  generateEnrollment(): string {
    return 'oi';
  }
}

export class Teacher extends Employee {
  
}

const newEmp = new Employee('Breno', 20, 'asdasd');
console.log(newEmp.age)