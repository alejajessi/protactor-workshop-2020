import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tShirtProduct: ElementFinder;

  constructor () {

    this.tShirtProduct = $('div[class="button-container"] > a[title="Add to cart"]');
  }

  public async selectProductTShirt(): Promise<void> {
    await this.tShirtProduct.click();
  }

}
