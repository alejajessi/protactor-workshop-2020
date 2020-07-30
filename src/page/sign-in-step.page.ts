import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private passw: ElementFinder;
  private validation: ElementFinder;

  constructor () {

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
