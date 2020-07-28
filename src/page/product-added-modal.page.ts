import { $, ElementFinder } from 'protractor';

export class ProductAddedModal {
  private tShirtAdd: ElementFinder;

  constructor () {
    this.tShirtAdd = $('[style*="display: block;"] .button-container > a');
  }

  public async productAdd(): Promise<void> {
    await this.tShirtAdd.click();
  }

}
