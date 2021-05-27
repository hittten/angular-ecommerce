import {Injectable} from '@angular/core';
import {PRODUCTS, SHOPPING_CART} from "./mock-products";
import {Product} from "./product";
import {Observable, of} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  create(product: Product): Observable<Product> {
    product.id = (Math.floor(Math.random() * 500) + 1).toString();
    product.createdAt = new Date().toISOString();
    product.image = `https://picsum.photos/id/${product.id}/300/300`;

    PRODUCTS.push(product);

    return of(product).pipe(
      delay(500),
      tap(() => console.log(product, 'was created'))
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
