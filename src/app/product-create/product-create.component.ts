import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnDestroy,
  OnInit
} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductInput, ProductService} from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCreateComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
    description: ['', Validators.required],
    image: ['', Validators.required],
  });

  private image?: File
  someText = "texto inicial";

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    // private cdr: ChangeDetectorRef,
  ) {
    console.log('[PRODUCT CREATE] - constructor');
    // this.cdr.detach()
    // setInterval(() => {
    //   console.log("send tick")
    // }, 1000)
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    console.log('cambiar texto en oninit');
    this.someText = "texto cambiado en el onInit"
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('[PRODUCT CREATE] - do check');
  }

  ngOnDestroy(): void {
    console.log('[PRODUCT CREATE] - OnDestroy');
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
      image: this.image!,
    }).subscribe(() => {
      this.productForm.reset({name: '', price: '', description: '', image: ''});
      console.log('new product', newProduct);
    })
  }

  fileChange($event: Event) {
    const input = $event.target as HTMLInputElement

    this.image = input.files?.[0];
  }

  calculateTax(value: string) {
    console.log("calculateTax")
    return Number(value) * 1.21
  }

  changeText() {
    console.log('cambiar texto en changeText');
    this.someText = "texto cambiado por botón"
  }
}
