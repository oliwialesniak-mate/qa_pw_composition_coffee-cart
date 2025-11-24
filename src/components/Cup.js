import { BaseComponent } from './BaseComponent';
import { expect } from '@playwright/test';

export class Cup extends BaseComponent {
  constructor(page) {
    super(page);
  }

  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');
    return this.page.getByTestId(testId);
  }

  coffeeCupCostLocator(coffeeName) {
    const cup = this.coffeeCupLocator(coffeeName);
    return this.page.getByRole('listitem').filter({ has: cup });
  }

  async clickCoffeeCup(coffeeName) {
    await this.coffeeCupLocator(coffeeName).click();
  }

  async assertCoffeeCupCostHasValue(coffeeName, value) {
    await expect(this.coffeeCupCostLocator(coffeeName)).toContainText(value);
  }
}
