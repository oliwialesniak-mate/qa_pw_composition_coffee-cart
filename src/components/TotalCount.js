import { BaseComponent } from './BaseComponent';
import { expect } from '@playwright/test';

export class TotalCount extends BaseComponent {
  constructor(page) {
    super(page);

    this.totalCheckout = page.getByTestId('checkout');
  }

  async assertTotalCheckoutContainsValue(value) {
    await expect(this.totalCheckout).toContainText(value);
  }
}
