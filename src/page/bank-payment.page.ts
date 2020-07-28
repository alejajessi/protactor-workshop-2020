import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private checkOutBtt: ElementFinder;

  constructor () {
    this.checkOutBtt = $('#cart_navigation > button > span');
  }

  public async checkOuttoFinish(): Promise<void> {
    await this.checkOutBtt.click();
  }
}
