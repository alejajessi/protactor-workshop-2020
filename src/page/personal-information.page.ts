import { $, ElementFinder, by, browser, ExpectedConditions } from 'protractor';

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

  public async fillForm(firstName: string, lastName: string, sex: string, experience: number,
                        profession: string[], tools: string[], continent: string,
                        commands: string[]): Promise<void> {

    await this.firstNameSpace.sendKeys(firstName);

    await this.lastNameSpace.sendKeys(lastName);

    this.checkGenderSpace = $(`input[name="sex"][value=${sex}]`);
    await this.checkGenderSpace.click();

    this.checkExperienceSpace = $(`input[name="exp"][value="${experience}"]`);
    await this.checkExperienceSpace.click();

    profession.forEach(async (element) => {
      this.professionSpace = $(`input[name="profession"][value="${element}"]`);
      await this.professionSpace.click();
    });

    commands.forEach(async (element) => {
      this.selectCommands = $('select[name="selenium_commands"]')
      .element(by.cssContainingText('option', element));
      await this.selectCommands.click();
    });

    tools.forEach(async (element) => {
      this.checkToolsSpace = $(`input[name="tool"][value="${element}"]`);
      await this.checkToolsSpace.click();
    });

    this.selectContinent = $('select[name="continents"]')
      .element(by.cssContainingText('option', continent));
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
