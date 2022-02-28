import {Injectable} from '@angular/core';
import {PRODUCTS, SHOPPING_CART} from "./mock-products";
import {Product} from "./product";

export type ProductBase = Pick<Product, "name" | "price" | "description">

export interface ProductInput extends ProductBase {
  image: File
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  create(product: ProductInput) {
    const id = (Math.floor(Math.random() * (999 - 100) + 100) + new Date().getTime()).toString()

    const data = {
      ...product,
      id,
      createdAt: new Date().toISOString(),
      image: URL.createObjectURL(product.image),
    }

    PRODUCTS.push(data);

    return product;
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
