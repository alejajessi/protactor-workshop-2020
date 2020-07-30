import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finalBtt: ElementFinder;

  constructor () {

    // Original : finalBtt = $('#center_column > div > p > strong');
    // I found an unique identifier like title apgit ear, it's more easy
    //  and shorter
    this.finalBtt = $('.cheque-indent');
  }

  public async summaryOrder(): Promise<string> {
    return this.finalBtt.getText();
  }
}
