import { browser } from 'protractor';
import { IFramePage } from '../src/page';
import { valueHeight } from './information_test/values';

describe('Open page', () => {
  beforeAll(async () => {
    await browser.get('https://demoqa.com/frames');
  });
  describe('Set iframe1 heigh', async () => {

    const iFramePage: IFramePage = new IFramePage();

    beforeAll(async () => {
      await iFramePage.setFormFrameHeight(valueHeight.newValueHeight);
    });

    it('New iframe1 height', async () => {
      await expect(await iFramePage.getFormFrameHeight())
        .toEqual(valueHeight.newValueHeight);
    });
  });
});
