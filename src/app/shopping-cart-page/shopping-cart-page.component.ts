import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Subscription} from "rxjs";
import {ProductClickEvent} from "../product-list/product-list.component";

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit, OnDestroy {
  private productsSubscription: Subscription = new Subscription();
  $products = this.productService.listShoppingCartItems();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  removeFromShoppingCart(event: ProductClickEvent) {
    event.element.disabled = true;

   this.productsSubscription = this.productService.removeFromShoppingCart(event.product)
      .subscribe(() => {

        this.$products = this.productService.listShoppingCartItems();
        event.element.disabled = false;
      });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
