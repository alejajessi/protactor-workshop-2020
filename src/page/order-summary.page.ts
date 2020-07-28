import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finalBtt: ElementFinder;

  constructor () {
    this.finalBtt = $('#center_column > div > p > strong');
  }

  public async summaryOrder(text: string): Promise<void> {
    await expect(this.finalBtt.getText()).toBe(text);
  }
}
