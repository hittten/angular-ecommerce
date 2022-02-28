import {Component, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from "../product";
import {EventEmitter} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

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

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
  }
}
