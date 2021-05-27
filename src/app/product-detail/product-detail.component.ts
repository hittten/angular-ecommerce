import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../product";
import {ProductService} from "../product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  $product: Observable<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    const id = this.route.snapshot.paramMap.get('id')!

    this.$product = productService.getProduct(id);
  }

  ngOnInit(): void {
  }
}
