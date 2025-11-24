import { BaseComponent } from './BaseComponent';
import { expect } from '@playwright/test';

export class Promo extends BaseComponent {
  constructor(page) {
    super(page);

    this.promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4."
    );

    this.yesPromoButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });
  }

  async assertPromoMessageIsVisible() {
    await expect(this.promoMessage).toBeVisible();
  }

  async clickYesPromoButton() {
    await this.yesPromoButton.click();
  }

  async clickNoPromoButton() {
    await this.noPromoButton.click();
  }
}
