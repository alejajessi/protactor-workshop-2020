import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tShirtAdd: ElementFinder;

  constructor () {
    // Original: tShirtAdd = $('[style*="display: block;"] .button-container > a');
    // In this case, I considered that find by title because locator was shorter

    this.tShirtAdd = $('a[title="Proceed to checkout"]');
  }

  public async productAdd(): Promise<void> {
    await this.tShirtAdd.click();
  }

}
