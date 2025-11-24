import { Header } from '../components/Header.js';
import { CartList } from '../components/CartList.js';
import { TotalCount } from '../components/TotalCount.js';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.header = new Header(page);
    this.cartList = new CartList(page);
    this.totalCount = new TotalCount(page);
  }

  async open() {
    await this.page.goto('/cart');
  }

  async waitForLoading() {
    await this.page.waitForSelector('.cart-loaded'); // adjust selector as needed
  }

  async reload() {
    await this.page.reload();
  }
}
