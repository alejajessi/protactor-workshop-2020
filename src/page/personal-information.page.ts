import { $, ElementFinder, by, browser, ExpectedConditions } from 'protractor';
import { FormData } from '../../test/information_test/values';

export class PersonalInformationPage {
  private firstNameSpace: ElementFinder;
  private lastNameSpace: ElementFinder;
  private checkGenderSpace: ElementFinder;
  private checkExperienceSpace: ElementFinder;
  private professionSpace: ElementFinder;
  private checkToolsSpace: ElementFinder;
  private selectContinent: ElementFinder;
  private selectCommands: ElementFinder;
  private button : ElementFinder;
  private titleText : ElementFinder;
  private timeout : number = 12000;

  constructor() {
    this.firstNameSpace = $('[name="firstname"]');
    this.lastNameSpace = $('[name="lastname"]');
    this.button = $('[name="submit"]');
    this.titleText = $('div.mui-container-fluid.content > div > div.mui-col-md-6.tutorial-content > h1:nth-child(1)');
  }

  public async fillForm(information : FormData): Promise<void> {

    await this.firstNameSpace.sendKeys(information.firstName);

    await this.lastNameSpace.sendKeys(information.lastName);

    this.checkGenderSpace = $(`input[name="sex"][value=${information.sex}]`);
    await this.checkGenderSpace.click();

    this.checkExperienceSpace = $(`input[name="exp"][value="${information.experience}"]`);
    await this.checkExperienceSpace.click();

    information.profession.forEach(async (element) => {
      this.professionSpace = $(`input[name="profession"][value="${element}"]`);
      await this.professionSpace.click();
    });

    information.commands.forEach(async (element) => {
      this.selectCommands = $('select[name="selenium_commands"]')
      .element(by.cssContainingText('option', element));
      await this.selectCommands.click();
    });

    information.tools.forEach(async (element) => {
      this.checkToolsSpace = $(`input[name="tool"][value="${element}"]`);
      await this.checkToolsSpace.click();
    });

    this.selectContinent = $('select[name="continents"]')
      .element(by.cssContainingText('option', information.continent));
    await this.selectContinent.click();

  }

  public async presButton (): Promise<void> {
    await this.button.click();
    browser.wait(ExpectedConditions.alertIsPresent(), this.timeout);
    await browser.switchTo().alert().accept();
  }

  public async getTitle(): Promise<string> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.titleText), this.timeout);
    return this.titleText.getText();
  }

}
