import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value + 10;
      console.log('Voce depositou: ' + value + ' e ganhou 10 reais de bonus');
    }
  };
}
