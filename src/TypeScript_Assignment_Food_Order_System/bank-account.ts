class BankAccount {
  accountNumber: number;
  ownerName: string;
  private balance: number;

  constructor(accountNumber: number, ownerName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }
  deposit(amount: number) {
    this.balance += amount;
  }
  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
  getBalance() {
    return this.balance;
  }
}
const account1 = new BankAccount(101, "Arman", 10000);
const account2 = new BankAccount(102, "Rahul", 5000);

account1.deposit(2000);
account2.withdraw(3000);

console.log(account1.getBalance());
console.log(account2.getBalance());
