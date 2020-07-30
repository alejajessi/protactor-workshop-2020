import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private check: ElementFinder;

  constructor () {

    this.check = $('[name="processAddress"]');
  }

  public async checkToShipping(): Promise<void> {
    await this.check.click();
  }
}
