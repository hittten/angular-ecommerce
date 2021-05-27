import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

const apiUrl = {
  products: `${environment.apiUrl}/products/${environment.user}/`,
  shoppingCart: `${environment.apiUrl}/shoppingCart/${environment.user}/`,
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(apiUrl.products, product)
      .pipe(
        tap((product) => console.log(product, 'was created'))
      );
  }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl.products).pipe(
      tap(() => console.log('listing products'))
    );
  }

  listShoppingCartItems(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl.shoppingCart).pipe(
      tap(() => console.log('listing shopping cart'))
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${apiUrl.products}${id}`).pipe(
      tap((product) => console.log('get product', product))
    );
  }

  addToShoppingCart(product: Product): Observable<string> {
    return this.http.put(apiUrl.shoppingCart + product.id, null, {responseType: 'text'})
      .pipe(
        tap(() => console.log(product, 'was added to shopping cart'))
      );
  }

  removeFromShoppingCart(product: Product): Observable<string> {
    return this.http.delete(apiUrl.shoppingCart + product.id, {responseType: 'text'})
      .pipe(
        tap(() => console.log(product, 'was removed from shopping cart'))
      );
  }
}
