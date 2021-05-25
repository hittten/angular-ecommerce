import {Injectable} from '@angular/core';
import {PRODUCTS, SHOPPING_CART} from "./mock-products";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  list(): Product[] {
    return PRODUCTS;
  }

  listShoppingCartItems(): Product[] {
    return SHOPPING_CART;
  }

  getProduct(id: string) {
    const index = PRODUCTS.findIndex(value => value.id === id);

    return PRODUCTS[index];
  }

  addToShoppingCart(product: Product) {
    SHOPPING_CART.push(product);
  }

  removeFromShoppingCart(product: Product): void {
    const id = SHOPPING_CART.findIndex(value => value.id === product.id);
    SHOPPING_CART.splice(id, 1);
  }
}
