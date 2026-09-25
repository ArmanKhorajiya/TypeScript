// class BankAccount {
//   readonly accountNumber: number;
//   public accountHolder: string;
//   private balance: number;
//   protected accountType: string;

//   constructor(
//     accountNUmber: number,
//     accountHolder: string,
//     balance: number,
//     accountType: string,
//   ) {
//     this.accountNumber = accountNUmber;
//     this.accountHolder = accountHolder;
//     this.balance = balance;
//     this.accountType = accountType;
//   }
// }

// const account1 = new BankAccount(101, "Arman", 10000, "Savings");
// console.log(account1);

// class Bank {
//   static totalAccounts = 0;

//   constructor() {
//     Bank.totalAccounts += 1;
//   }

//   static getTotalAccounts() {
//     return Bank.totalAccounts;
//   }
// }

// const b1 = new Bank();
// const b2 = new Bank();
// const b3 = new Bank();

// console.log(Bank.getTotalAccounts());

class Student {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  set studentName(name: string) {
    if (name.length < 3) {
      throw new Error("Name must have at least 3 characyers");
    }
    this.name = name.toUpperCase();
  }

  get studentName() {
    return this.name;
  }
}
const student = new Student("arman");

student.studentName = "arman";

console.log(student.studentName);
