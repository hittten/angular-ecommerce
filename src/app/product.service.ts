import {Injectable} from '@angular/core';
import {PRODUCTS} from "./mock-products";
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
}
