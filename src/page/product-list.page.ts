import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tShirtProduct: ElementFinder;

  constructor () {
    // Original = this.productList = $('a.button.ajax_add_to_cart_button.btn.btn-default');
    // Althouhg the locator was specific, this is another two step option.

    this.tShirtProduct = $('div[class="button-container"] > a[title="Add to cart"]');
  }

  public async selectProductTShirt(): Promise<void> {
    await this.tShirtProduct.click();
  }

}
