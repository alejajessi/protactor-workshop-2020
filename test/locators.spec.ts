import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { FormData } from './information_test/values';

describe('Open page in navegator', () => {

  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('Fill form information', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const information: FormData = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands'],
      expectedMessage: 'Selenium - Automation Practice Form'
    };
    beforeAll(async () => {

      await personalInformationPage.fillForm(information);
    });

    it('press button', async () => {
      await personalInformationPage.presButton();
      await expect(personalInformationPage.getTitle()).toBe(information.expectedMessage);
    });
  });
});
