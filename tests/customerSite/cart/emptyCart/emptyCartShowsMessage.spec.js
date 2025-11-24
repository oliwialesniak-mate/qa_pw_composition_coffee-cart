import { test } from '../../../_fixtures/fixtures';

test('An empty cart shows correct message', async ({ cartPage }) => {
  await cartPage.open();

  // Use the component directly
  await cartPage.cartItems.assertNoCoffeeMessageIsVisible();
});
