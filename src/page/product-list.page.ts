import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tShirtProduct: ElementFinder;

  constructor () {
    this.tShirtProduct = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectProductTShirt(): Promise<void> {
    await this.tShirtProduct.click();
  }

}
