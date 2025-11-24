import { test } from '../../../_fixtures/fixtures';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

const testParameters = Object.entries(COFFEE_NAMES).map(([key, value]) => ({
  coffee: value,
  price: COFFEE_PRICES[key],
}));

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} is correctly added to the Cart`, async ({
    menuPage,
    cartPage,
  }) => {
    const totalPriceStr = priceFormatStr(price);
    const unitPriceStr = unitPriceFormatStr(price, 1);

    // Open menu page
    await menuPage.open();

    // Click coffee cup using the component directly
    await menuPage.menuItems.clickCoffeeCup(coffee);

    // Navigate to cart via header component
    await menuPage.header.clickCartLink();
    await cartPage.waitForLoading();

    // Assertions using cart components
    await cartPage.cartItems.assertCoffeeNameContainsCorrectText(coffee);
    await cartPage.cartItems.assertCoffeeUnitContainsCorrectText(
      coffee,
      unitPriceStr,
    );
    await cartPage.cartItems.assertCoffeeTotalCostContainsCorrectText(
      coffee,
      totalPriceStr,
    );
  });
});
