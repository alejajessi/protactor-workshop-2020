import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInStepPage,
   AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderSummaryPage} from '../src/page';
import { buyTShirtData } from './information_test/values';

describe('Open page in navegator', () => {

  beforeAll(async () => {

    await browser.get('http://automationpractice.com/');

  });

  describe('select product, t-shirt', () => {

    beforeAll(async () => {

      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productaddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct(buyTShirtData.productName);
      await productaddedModalPage.productAdd();
      await summaryStepPage.checkSignIn();

    });

    describe('login in page app', () => {

      beforeAll(async () => {

        const signInStepPage: SignInStepPage = new SignInStepPage();

        await signInStepPage.writeEmail(buyTShirtData.email);
        await signInStepPage.writePassword(buyTShirtData.password);
        await signInStepPage.continueToLogin();

      });

      describe('default address', () => {

        beforeAll(async () => {

          const addressStepPage: AddressStepPage = new AddressStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addressStepPage.checkToShipping();
          await shippingStepPage.confirmButton();
          await shippingStepPage.continueToPay();

        });

        describe('payment bank', () => {

          beforeAll(async () => {

            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await paymentStepPage.checkOutPayment();
            await bankPaymentPage.checkOuttoFinish();

          });

          it('order should be completed ', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

            await expect(orderSummaryPage.summaryOrder()).toBe(buyTShirtData.expectedMessage);

          });

        });

      });

    });

  });

});
