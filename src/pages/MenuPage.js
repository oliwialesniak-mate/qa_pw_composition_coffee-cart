import { Header } from '../components/Header.js';
import { Cup } from '../components/Cup.js';
import { TotalCount } from '../components/TotalCount.js';
import { Promo } from '../components/Promo.js';

export class MenuPage {
  constructor(page) {
    this.page = page;
    this.header = new Header(page);
    this.cup = new Cup(page);
    this.totalCount = new TotalCount(page);
    this.promo = new Promo(page);
  }

  async open() {
    await this.page.goto('/menu');
  }
}
