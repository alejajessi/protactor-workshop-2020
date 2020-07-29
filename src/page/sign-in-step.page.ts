import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private passw: ElementFinder;
  private validation: ElementFinder;

  constructor () {

    // Original: validation = $('#SubmitLogin > span');
    // I think that locators are good but I found that final locator
    // validation could be without span, because SubmitLogin is an
    // identifier.
    this.email = $('#email');
    this.passw = $('#passwd');
    this.validation = $('#SubmitLogin');
  }

  public async writeEmail(correo: string): Promise<void> {
    await this.email.sendKeys(correo);
  }

  public async writePassword(password: string): Promise<void> {
    await this.passw.sendKeys(password);
  }

  public async continueToLogin(): Promise<void> {
    await this.validation.click();
  }
}
