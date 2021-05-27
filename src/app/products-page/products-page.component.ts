import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Subscription} from "rxjs";
import {ProductClickEvent} from "../product-list/product-list.component";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  private shoppingCartSubscription: Subscription = new Subscription();

  $products = this.productService.list();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  addToShoppingCart(event: ProductClickEvent) {
    event.element.disabled = true;

    this.shoppingCartSubscription = this.productService.addToShoppingCart(event.product)
      .subscribe(() => {
        event.element.disabled = false;
      });
  }

  ngOnDestroy(): void {
    this.shoppingCartSubscription.unsubscribe();
  }
}
