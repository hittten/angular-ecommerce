import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit {
  products = this.productService.listShoppingCartItems();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  removeFromShoppingCart(product: Product) {
    this.productService.removeFromShoppingCart(product);
  }
}
