import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tShirtAdd: ElementFinder;

  constructor () {
    this.tShirtAdd = $('[style*="display: block;"] .button-container > a');
  }

  public async productAdd(): Promise<void> {
    await this.tShirtAdd.click();
  }

}
