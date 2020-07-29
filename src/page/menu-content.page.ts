import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {

    // Original: tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
    // In this case, it was very difficult find a improving locator
    // because in the code block doesn't have a good locator or identifier
    // that I could use. Then I decided put title like identifier  because
    // it's more own that "li:nth-child(3) > a" but also I can't remove
    // anyother indicators (ul, li) because they're essencial in this situation.

    this.tShirtMenu = $('#block_top_menu > ul > li > a[title= "T-shirts"]');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
}
