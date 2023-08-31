class Employee {
  constructor(public name: string, private department: string, protected salary: number) {}

  getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {  
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);
    this.salary += 10000;
  }
}

const Mango = new Employee("Mango", "Developer", 10000);
console.log(Mango.getEmployeeDetails());
const Poly = new Manager("Poly", "Project Manager", 10000);
console.log(Poly.getEmployeeDetails());

export {};

