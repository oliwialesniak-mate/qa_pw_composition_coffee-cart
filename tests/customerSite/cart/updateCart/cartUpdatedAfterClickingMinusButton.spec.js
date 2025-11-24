import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.header.clickCartLink();
  await cartPage.waitForLoading();

  // Check espresso is visible
  await cartPage.cartItems.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);

  // Remove one espresso
  await cartPage.cartItems.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.espresso);
  await cartPage.cartItems.assertCoffeeItemIsHidden(COFFEE_NAMES.espresso);

  // Cappuccino should still be visible
  await cartPage.cartItems.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  // Remove one cappuccino
  await cartPage.cartItems.clickCoffeeListItemRemoveOneButton(COFFEE_NAMES.cappuccino);
  await cartPage.cartItems.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);

  // Cart should show empty message
  await cartPage.cartItems.assertNoCoffeeMessageIsVisible();
});
