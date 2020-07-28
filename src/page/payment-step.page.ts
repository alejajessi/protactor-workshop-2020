import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private checkOutBtt: ElementFinder;

  constructor () {
    this.checkOutBtt = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async checkOutPayment(): Promise<void> {
    await this.checkOutBtt.click();
  }
}
