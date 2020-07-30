import { ElementFinder, by, element } from 'protractor';

export class BankPaymentPage {
  private checkOutBtt: ElementFinder;

  constructor () {

    this.checkOutBtt = element(by.partialButtonText('I confirm my order'));
  }

  public async checkOuttoFinish(): Promise<void> {
    await this.checkOutBtt.click();
  }
}
