class BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  accountType: string;

  constructor(
    accountNUmber: number,
    accountHolder: string,
    balance: number,
    accountType: string,
  ) {
    this.accountNumber = accountNUmber;
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.accountType = accountType;
  }
}

const account1 = new BankAccount(101, "Arman", 10000, "Savings");
console.log(account1);

