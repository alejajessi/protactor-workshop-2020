
import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private confirmBtt: ElementFinder;
  private  methodPay : ElementFinder;

  constructor () {

    // Original : methodPay = $('#form > p > button > span');
    // In the second case, I look an identifier and I found a name
    // Then it's more specific and understandable
    this.confirmBtt = $('#cgv');
    this.methodPay = $('[name="processCarrier"]');
  }

  public async confirmButton(): Promise<void> {
    await this.confirmBtt.click();
  }

  public async continueToPay(): Promise<void> {
    await this.methodPay.click();
  }
}
