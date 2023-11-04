import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Validators, FormBuilder} from '@angular/forms';
import {ProductInput, ProductService} from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  getError(field: keyof ProductInput): string {
    if (!this.productForm.controls[field].dirty || !this.productForm.controls[field].errors) {
      return ''
    }

    if (this.productForm.controls[field].hasError('required')) {
      return 'required'
    }

    if (this.productForm.controls[field].hasError('minlength')) {
      return `The min length is ${this.productForm.controls[field].getError('minlength')['requiredLength']}`
    }

    if (this.productForm.controls[field].hasError('min')) {
      return `The min ${this.productForm.controls[field].getError('min')['min']}`
    }

    if (this.productForm.controls[field].hasError('max')) {
      return `The max ${this.productForm.controls[field].getError('max')['max']}`
    }

    return 'invalid'
  }

  onSubmit() {
    const formValue = this.productForm.value;

    const newProduct = this.productService.create({
      name: formValue.name as string,
      description: formValue.description as string,
      price: Number(formValue.price),
    })

    this.productForm.reset({name: '', price: '', description: ''});

    console.log('new product', newProduct);
  }
}
