import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { Promo } from '../components/Promo';
import { Cup } from '../components/Cup';
import { TotalCount } from '../components/TotalCount';

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/';

    this.header = new Header(page);
    this.promo = new Promo(page);
    this.cup = new Cup(page);
    this.total = new TotalCount(page);
  }

  async clickCoffeeCup(coffeeName) {
    await this.cup.clickCoffeeCup(coffeeName);
  }

  async assertCoffeeCupCostHasValue(coffeeName, value) {
    await this.cup.assertCoffeeCupCostHasValue(coffeeName, value);
  }

  // forwarded for backwards compatibility with tests
  async clickCartLink() {
    await this.header.clickCartLink();
  }

  async assertTotalCheckoutContainsValue(value) {
    await this.total.assertTotalCheckoutContainsValue(value);
  }

  async assertPromoMessageIsVisible() {
    await this.promo.assertPromoMessageIsVisible();
  }

  async clickYesPromoButton() {
    await this.promo.clickYesPromoButton();
  }

  async clickNoPromoButton() {
    await this.promo.clickNoPromoButton();
  }
}
