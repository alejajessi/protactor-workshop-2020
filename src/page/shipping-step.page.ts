
import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private confirmBtt: ElementFinder;
  private  methodPay : ElementFinder;

  constructor () {

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
