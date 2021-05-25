import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products = this.productService.list();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addToShoppingCart(product: Product) {
    this.productService.addToShoppingCart(product);
  }

}
