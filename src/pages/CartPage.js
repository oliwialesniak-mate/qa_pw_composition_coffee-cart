import HeaderComponent from './components/HeaderComponent';
import CartItemsComponent from './components/CartItemsComponent';

export default class CartPage {
  constructor() {
    this.header = new HeaderComponent();
    this.cartItems = new CartItemsComponent();
  }
}
