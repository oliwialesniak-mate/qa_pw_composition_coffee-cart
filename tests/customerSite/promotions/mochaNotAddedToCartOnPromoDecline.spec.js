import { test } from '../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../src/constants';

test('Discounted Mocha Not added to the Cart after promo rejecting', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();

  // Use component-based actions
  await menuPage.menu.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.menu.clickCoffeeCup(COFFEE_NAMES.espresso);
  await menuPage.menu.clickCoffeeCup(COFFEE_NAMES.americano);

  await menuPage.menu.assertPromoMessageIsVisible();
  await menuPage.menu.clickNoPromoButton();

  // Navigate to cart via header component
  await menuPage.header.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);
  await cartPage.assertCoffeeItemIsHidden('(Discounted) Mocha');
  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);
  await cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.americano);
});
