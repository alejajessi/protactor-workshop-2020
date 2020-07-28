import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModal, SummaryStepPage, SignInStepPage,
   AddressStepPage, ShippingStepPage, PaymentStepPage, BankPaymentPage,
   OrderSummaryPage} from '../src/page';
import { values } from './information_test/values';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productaddedModal: ProductAddedModal = new ProductAddedModal();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productListPage.selectProductTShirt();
    await(browser.sleep(3000));
    await productaddedModal.productAdd();
    await(browser.sleep(3000));
    await summaryStepPage.checkSignIn();
    await(browser.sleep(3000));

    await signInStepPage.writeEmail(values.correo);
    await signInStepPage.writePassword(values.pass);
    await signInStepPage.continueToLogin();
    await(browser.sleep(3000));

    await addressStepPage.checkToShipping();
    await(browser.sleep(3000));

    await shippingStepPage.confirmButton();
    await(browser.sleep(3000));

    await shippingStepPage.continueToPay();
    await(browser.sleep(3000));
    await paymentStepPage.checkOutPayment();
    await(browser.sleep(3000));
    await bankPaymentPage.checkOuttoFinish();
    await(browser.sleep(3000));

    await orderSummaryPage.summaryOrder(values.finalMessage) ;
  });
});
