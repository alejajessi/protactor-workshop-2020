import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private summaryStep: ElementFinder;

  constructor () {
    // I think that it is a good locator.
    // I don't have any improvement.
    this.summaryStep = $('.cart_navigation span');
  }

  public async checkSignIn (): Promise<void> {
    await this.summaryStep.click();
  }

}
