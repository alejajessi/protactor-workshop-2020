import { $$, ExpectedConditions, ElementFinder, ElementArrayFinder, browser } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;
  private timeOut: number = 7000;

  constructor() {
    this.products = $$('.product-container');
  }

  public async selectProduct(productName: string): Promise<void> {
    await browser.wait(ExpectedConditions.visibilityOf(this.findByProduct(productName)),
                       this.timeOut);
    await this.findByProduct(productName).$('a.ajax_add_to_cart_button').click();
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products.filter((elemento: ElementFinder) =>
      elemento.$('.product-name').getText().then((texto: string) =>
        texto.includes(productName))).first();
  }

}
