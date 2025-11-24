import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart cleaned after page refresh', async ({ cartPage, menuPage }) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.header.clickCartLink();
  await cartPage.waitForLoading();

  // Use cartItems component for assertions
  await cartPage.cartItems.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.reload();

  await cartPage.cartItems.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.cartItems.assertNoCoffeeMessageIsVisible();
});
