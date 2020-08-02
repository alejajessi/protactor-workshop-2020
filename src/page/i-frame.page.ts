import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = $('#frame1');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFormFrameHeight(): Promise<number> {
    const height: string = await this.iframe1.getAttribute('height');
    return Number(height);
  }
}
