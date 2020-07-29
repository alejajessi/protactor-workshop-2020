import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private checkOutBtt: ElementFinder;

  constructor () {
    // Original : checkOutBtt  = $('[#HOOK_PAYMENT > div:nth-child(1) > div > p > a]');
    // In this case, I look an identifier and I found a class
    // Then it's more specific, shorter and understandable
    this.checkOutBtt = $('a[class="bankwire"]');
  }

  public async checkOutPayment(): Promise<void> {
    await this.checkOutBtt.click();
  }
}
