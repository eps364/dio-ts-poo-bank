export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log('Voce depositou: ' + value);
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.getBalance() > value) {
      this.balance -= value;
      console.log('Voce sacou:' + value);
    } else {
      console.log('Saldo insuficiente');
    }
  };

  getBalance = (): number => {
    console.log(this.balance);
    return this.balance;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida ou desativada');
  };
}
