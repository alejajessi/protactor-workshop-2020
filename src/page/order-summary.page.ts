import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finalBtt: ElementFinder;

  constructor () {

    this.finalBtt = $('.cheque-indent');
  }

  public async summaryOrder(): Promise<string> {
    return this.finalBtt.getText();
  }
}
