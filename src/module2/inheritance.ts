// What is Inheritance:
// Inheritance means one class can use the properties and methods of another class.

// Real-life example:

//         Person
//           ↓
//        Student
//           ↓
//     CodingStudent

// A Student is a Person, so it can reuse things from Person.

// Basic Syntax:-

// class Person {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`My Name is ${this.name}`);
//   }
// }

// class Student extends Person {
//   course: string;

//   constructor(name: string, course: string) {
//     super(name);
//     this.course = course;
//   }

//   study() {
//     console.log(`${this.name} is studing ${this.course}`);
//   }
// }

// const student = new Student("Arman", "TypeScript");

// student.introduce();
// student.study();

// ex:
// class BankAccount {
//   protected balance: number;

//   constructor(balance: number) {
//     this.balance = balance;
//   }

//   showBalance() {
//     console.log(this.balance);
//   }
// }
// class SavingsAccount extends BankAccount {
//   interestRate: number;

//   constructor(balance: number, interestRate: number) {
//     super(balance);
//     this.interestRate = interestRate;
//   }

//   calculateInterest() {
//     return (this.balance * this.interestRate) / 100;
//   }
// }
// const account1 = new SavingsAccount(10000, 5);
// account1.showBalance();
// console.log(account1.calculateInterest());

// Q1:
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`${this.name} is ${this.age} years old`);
//   }
// }

// class Student extends Person {
//   course: string;

//   constructor(name: string, age: number, course: string) {
//     super(name, age);
//     this.course = course;
//   }

//   study() {
//     console.log(
//       `${this.name} is ${this.age} year old, And he is studying ${this.course}`,
//     );
//   }
// }

// const s1 = new Student("Arman", 18, "TypeScript");
// s1.introduce();
// s1.study();

// Q2
// class Employee {
//   protected salary: number;

//   constructor(salary: number) {
//     this.salary = salary;
//   }

//   showSalary() {
//     console.log(`Salary is ${this.salary}`);
//   }
// }

// class Developer extends Employee {
//   language: string;

//   constructor(salary: number, language: string) {
//     super(salary);
//     this.language = language;
//   }

//   showDeveloper() {
//     console.log(`Developer is Learning ${this.language}`);
//   }
// }

// const d1 = new Developer(50000, "TypeScript");
// d1.showSalary();
// d1.showDeveloper();

// Q3
// class Animal {
//   sound() {
//     console.log("Animal makes sound");
//   }
// }

// class Dog extends Animal {
//   sound() {
//     console.log("Dog barks");
//   }
// }

// class Cat extends Animal {
//   sound() {
//     console.log("Cat meows");
//   }
// }

// const dog = new Dog();
// const cat = new Cat();

// dog.sound();
// cat.sound();
