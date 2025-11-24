import { test } from '../../../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

const testParameters = Object.entries(COFFEE_NAMES).map(([key, value]) => ({
  coffee: value,
  price: COFFEE_PRICES[key],
}));

testParameters.forEach(({ coffee, price }) => {
  test(`Total cost is updated after clicking the ${coffee} cup`, async ({ menuPage }) => {
    const totalPriceStr = totalPriceFormatStr(price);

    await menuPage.open();
    await menuPage.clickCoffeeCup(coffee);

    // Component-based access (assuming menuPage has checkout component)
    await menuPage.checkout.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});
