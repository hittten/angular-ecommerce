import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../product";
import {EventEmitter} from '@angular/core';
import {Observable, of} from "rxjs";

export interface ProductClickEvent {
  product: Product;
  element: HTMLButtonElement;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() title: string = '';
  @Input() $products: Observable<Product[]> = of([]);
  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter<ProductClickEvent>();
  gridView = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
  }
}
