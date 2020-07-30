import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private checkOutBtt: ElementFinder;

  constructor () {

    this.checkOutBtt = $('a[class="bankwire"]');
  }

  public async checkOutPayment(): Promise<void> {
    await this.checkOutBtt.click();
  }
}
