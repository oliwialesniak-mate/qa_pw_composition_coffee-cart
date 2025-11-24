import { test } from '../../../_fixtures/fixtures';
import { priceFormatStr } from '../../../../src/common/helpers/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../../../src/constants';

const testParameters = Object.entries(COFFEE_NAMES).map(([key, value]) => ({
  coffee: value,
  price: COFFEE_PRICES[key],
}));

testParameters.forEach(({ coffee, price }) => {
  test(`The ${coffee} cup has correct cost`, async ({ menuPage }) => {
    const priceStr = priceFormatStr(price);

    await menuPage.open();

    // Component-based access
    await menuPage.menu.assertCoffeeCupCostHasValue(coffee, priceStr);
  });
});
