import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { formData } from './information_test/values';

describe('Open page in navegator', () => {

  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('Fill form information', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    beforeAll(async () => {

      await personalInformationPage.fillForm(formData.firstName, formData.lastName, formData.sex,
                                             formData.experience, formData.profession,
                                             formData.tools, formData.continent, formData.commands);
    });

    it('press button', async () => {
      await personalInformationPage.presButton();
      await expect(personalInformationPage.getTitle).toBe(formData.expectedMessage);
    });
  });
});
