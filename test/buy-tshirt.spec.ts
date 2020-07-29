import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage, SignInStepPage,
   AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage, OrderSummaryPage} from '../src/page';
import { buyTShirtData } from './information_test/values';

describe('Buy a t-shirt', () => {

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productaddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectProductTShirt();
    await productaddedModalPage.productAdd();
    await summaryStepPage.checkSignIn();

    await signInStepPage.writeEmail(buyTShirtData.email);
    await signInStepPage.writePassword(buyTShirtData.password);
    await signInStepPage.continueToLogin();

    await addressStepPage.checkToShipping();

    await shippingStepPage.confirmButton();

    await shippingStepPage.continueToPay();
    await paymentStepPage.checkOutPayment();
    await bankPaymentPage.checkOuttoFinish();

    await expect(orderSummaryPage.summaryOrder()).toBe(buyTShirtData.expectedMessage);
  });
});
