import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EuroCurrencyPipe } from './euro-currency.pipe';
import { HighlightDirective } from './highlight.directive';
import { TooltipDirective } from './tooltip.directive';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    EuroCurrencyPipe,
    HighlightDirective,
    TooltipDirective,
    EuroCurrencyPipe,
    ProductsPageComponent,
    ShoppingCartPageComponent,
    ProductDetailComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
