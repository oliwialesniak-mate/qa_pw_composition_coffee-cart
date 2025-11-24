import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { CartList } from '../components/CartList';
import { TotalCount } from '../components/TotalCount';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';

    this.header = new Header(page);
    this.cartList = new CartList(page);
    this.total = new TotalCount(page);
  }

  async waitForLoading() {
    await this.cartList.waitForLoading();
  }

  async assertNoCoffeeMessageIsVisible() {
    await this.cartList.assertNoCoffeeMessageIsVisible();
  }

  async assertCoffeeItemIsVisible(name) {
    await this.cartList.assertCoffeeItemIsVisible(name);
  }

  async assertCoffeeItemIsHidden(name) {
    await this.cartList.assertCoffeeItemIsHidden(name);
  }

  async assertCoffeeNameContainsCorrectText(name) {
    await this.cartList.assertCoffeeNameContainsCorrectText(name);
  }

  async assertCoffeeUnitContainsCorrectText(name, text) {
    await this.cartList.assertCoffeeUnitContainsCorrectText(name, text);
  }

  async assertCoffeeTotalCostContainsCorrectText(name, text) {
    await this.cartList.assertCoffeeTotalCostContainsCorrectText(name, text);
  }

  async clickCoffeeListItemRemoveAllButton(name) {
    await this.cartList.clickCoffeeListItemRemoveAllButton(name);
  }

  async clickCoffeeListItemRemoveOneButton(name) {
    await this.cartList.clickCoffeeListItemRemoveOneButton(name);
  }

  async clickCoffeeListItemAddOneButton(name) {
    await this.cartList.clickCoffeeListItemAddOneButton(name);
  }

  async assertTotalCheckoutContainsValue(value) {
    await this.total.assertTotalCheckoutContainsValue(value);
  }
}
