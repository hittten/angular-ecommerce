import {Injectable} from '@angular/core';
import {PRODUCTS, SHOPPING_CART} from "./mock-products";
import {Product} from "./product";
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";

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

  create(product: ProductInput): Observable<Product> {
    const id = (Math.floor(Math.random() * (999 - 100) + 100) + new Date().getTime()).toString()

    const data = {
      ...product,
      id,
      createdAt: new Date().toISOString(),
      image: URL.createObjectURL(product.image),
    }

    PRODUCTS.push(data);

    return of(data).pipe(
      delay(500),
      tap(() => console.log(data, 'was created'))
    );
  }

  list(): Observable<Product[]> {
    return of(PRODUCTS).pipe(
      delay(500),
      tap(() => console.log('listing products'))
    );
  }

  listShoppingCartItems(): Observable<Product[]> {
    return of([...SHOPPING_CART]).pipe(
      delay(500),
      tap(() => console.log('listing shopping cart'))
    );
  }

  getProduct(id: string): Observable<Product> {
    const index = PRODUCTS.findIndex(value => value.id === id);

    return of(PRODUCTS[index]).pipe(
      delay(500),
      tap(() => console.log('get product', PRODUCTS[index]))
    );
  }

  addToShoppingCart(product: Product): Observable<string> {
    SHOPPING_CART.push(product);

    return of('OK').pipe(
      delay(500),
      tap(() => console.log(product, 'was added to shopping cart'))
    );
  }

  removeFromShoppingCart(product: Product): Observable<string> {
    const id = SHOPPING_CART.findIndex(value => value.id === product.id);
    SHOPPING_CART.splice(id, 1);

    return of('OK').pipe(
      delay(500),
      tap(() => console.log(product, 'was removed from shopping cart'))
    );
  }
}
