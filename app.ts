import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

// Test scenario for all possible accounts
const companyAccount = new CompanyAccount('Company', 1000);
const peopleAccount = new PeopleAccount(10, 'Jose da Silva', 1000);
const specialAccount = new SpecialAccount('Jose Lopes', 1001);

console.log('Company Account');
companyAccount.getBalance();
companyAccount.deposit(100);
companyAccount.withdraw(200);
companyAccount.withdraw(10);
companyAccount.getBalance();

console.log('People Account');
peopleAccount.getBalance();
peopleAccount.deposit(100);
peopleAccount.withdraw(200);
peopleAccount.withdraw(10);
peopleAccount.getBalance();

console.log('Special Account');
specialAccount.getBalance();
specialAccount.deposit(100);
specialAccount.withdraw(200);
specialAccount.withdraw(10);
specialAccount.getBalance();

