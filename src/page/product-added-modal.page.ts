import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tShirtAdd: ElementFinder;

  constructor () {

    this.tShirtAdd = $('a[title="Proceed to checkout"]');
  }

  public async productAdd(): Promise<void> {
    await this.tShirtAdd.click();
  }

}
