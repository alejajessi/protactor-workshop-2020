import { ElementFinder, by, element } from 'protractor';

export class BankPaymentPage {
  private checkOutBtt: ElementFinder;

  constructor () {
    // original :  checkOutBtt = $('#cart_navigation > button > span')
    // I decided : #cart_navigation span because "> button > span" is
    // unnecessary. In #cart_navigation code block only has one span,
    // so it is sufficient information.
    this.checkOutBtt = element(by.partialButtonText('I confirm my order'));
  }

  public async checkOuttoFinish(): Promise<void> {
    await this.checkOutBtt.click();
  }
}
