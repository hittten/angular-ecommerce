import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Observable, switchMap} from "rxjs";
import {tap} from "rxjs/operators";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

const apiUrl = {
  products: `${environment.apiUrl}/products/${environment.user}/`,
  shoppingCart: `${environment.apiUrl}/shoppingCart/${environment.user}/`,
};

export type ProductBase = Pick<Product, "name" | "price" | "description">

export interface ProductInput extends ProductBase {
  image: File
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  create(product: ProductInput): Observable<Product> {
    return this.toBase64(product.image)
      .pipe(
        tap(image => console.log(image)),
        switchMap(image => this.http.post<Product>(apiUrl.products, {...product, image})),
        tap(product => console.log(product, 'was created')),
      )
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

  toBase64(file: Blob) {
    return new Observable<string | ArrayBuffer>(subscriber => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (!reader.result) {
          subscriber.error(new Error('null result'))
          return;
        }

        subscriber.next(reader.result);
      };
      reader.onerror = (error) => subscriber.error(error);
      reader.onloadend = () => subscriber.complete();
    })
  }
}
