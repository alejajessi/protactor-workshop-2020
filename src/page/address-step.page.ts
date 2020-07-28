import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private check: ElementFinder;

  constructor () {
    this.check = $('#center_column > form > p > button > span');
  }

  public async checkToShipping(): Promise<void> {
    await this.check.click();
  }
}
