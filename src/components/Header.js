import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartLink = page.getByLabel('Cart page');
  }

  async clickCartLink() {
    await this.cartLink.click();
  }
}
