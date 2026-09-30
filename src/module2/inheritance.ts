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

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce() {
    console.log(`My Name is ${this.name}`);
  }
}

class Student extends Person {
  course: string;

  constructor(name: string, course: string) {
    super(name);
    this.course = course;
  }

  study() {
    console.log(`${this.name} is studing ${this.course}`);
  }
}

const student = new Student("Arman", "TypeScript");

student.introduce();
student.study();

// ex:
class BankAccount {
  protected balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  showBalance() {
    console.log(this.balance);
  }
}
class SavingsAccount extends BankAccount {
  interestRate: number;

  constructor(balance: number, interestRate: number) {
    super(balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    return (this.balance * this.interestRate) / 100;
  }
}
const account1 = new SavingsAccount(10000, 5);
account1.showBalance();
console.log(account1.calculateInterest());
