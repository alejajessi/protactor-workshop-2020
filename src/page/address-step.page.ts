import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private check: ElementFinder;

  constructor () {

    // Original: check = $('#center_column > form > p > button > span');
    // When we talk about improving locators, we should look
    // for good practices.
    // In this case, the locator was extensive and a good
    // practice is that when we working with CSS or XPath
    // we should keeep the locators short.
    // For that reason, I looked for an "identifier" and
    // in the button I found that the name = processAddress
    // I checked that it was unique in that block. Shorter,
    // same function
    this.check = $('[name="processAddress"]');
  }

  public async checkToShipping(): Promise<void> {
    await this.check.click();
  }
}
