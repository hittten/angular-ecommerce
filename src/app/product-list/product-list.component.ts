import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../product";
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() title: string = '';
  @Input() products: Product[] = [];
  @Input() buttonText: string = '';
  @Output() buttonClick = new EventEmitter<Product>();
  gridView = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
  }
}
