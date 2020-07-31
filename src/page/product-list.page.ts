import { $, $$, ExpectedConditions, ElementFinder, ElementArrayFinder, browser } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;
  private addProduct: ElementFinder;
  private timeOut: number = 7000;

  constructor() {
    this.products = $$('.product-container');
    this.addProduct = $('div[class="button-container"] > a[title="Add to cart"]');
  }

  public async selectProduct(productName: string): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this.findByProduct(productName)),
                       this.timeOut);
    await this.addProduct.click();
    await this.findByProduct(productName).$('a.ajax_add_to_cart_button').click();
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products.filter((elemento: ElementFinder) =>
      elemento.$('.product-name').getText().then((texto: string) =>
        texto.includes(productName))).first();
  }

}
