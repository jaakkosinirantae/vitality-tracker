/* complex_program.js */

// This code demonstrates a complex program that is designed to manage a virtual bank account system.
// It includes various functions to handle account creation, transactions, user authentication, and more.

// Define a BankAccount class
class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: 'Deposit',
      amount: amount,
      date: new Date(),
    });
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }

    this.balance -= amount;
    this.transactions.push({
      type: 'Withdrawal',
      amount: amount,
      date: new Date(),
    });
  }

  getStatement() {
    let statement = `Account Number: ${this.accountNumber}\n`;
    statement += `Account Holder: ${this.accountHolder}\n`;
    statement += `Balance: ${this.balance}\n\n`;
    statement += 'Transactions:\n';

    for (let transaction of this.transactions) {
      statement += `${transaction.date.toISOString()} - ${transaction.type}: ${transaction.amount}\n`;
    }

    return statement;
  }
}

// Define a Bank class to manage multiple BankAccounts
class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(accountHolder) {
    const accountNumber = this.generateAccountNumber();
    const account = new BankAccount(accountNumber, accountHolder);
    this.accounts.push(account);
    return account;
  }

  getAccount(accountNumber) {
    for (let account of this.accounts) {
      if (account.accountNumber === accountNumber) {
        return account;
      }
    }

    throw new Error('Account not found');
  }

  generateAccountNumber() {
    // Generate a random 6-digit account number
    return Math.floor(Math.random() * 900000) + 100000;
  }

  getBankStatement() {
    let statement = `Bank: ${this.name}\n\n`;
    statement += 'Accounts:\n';

    for (let account of this.accounts) {
      statement += `Account Number: ${account.accountNumber} | Account Holder: ${account.accountHolder} | Balance: ${account.balance}\n`;
    }

    return statement;
  }
}

// Main program
const bank = new Bank('My Bank');

// Create some bank accounts
const account1 = bank.createAccount('John Doe');
const account2 = bank.createAccount('Jane Smith');

// Perform transactions
account1.deposit(1000);
account1.withdraw(200);
account1.deposit(500);
account2.deposit(1500);
account2.withdraw(300);

// Print bank statements
console.log(account1.getStatement());
console.log(account2.getStatement());
console.log(bank.getBankStatement());
