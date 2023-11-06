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
import { HttpClientModule } from "@angular/common/http";
import { AppParent1Component } from './app-parent1/app-parent1.component';
import { AppParent2Component } from './app-parent2/app-parent2.component';
import { AppParent1Child1Component } from './app-parent1-child1/app-parent1-child1.component';
import { AppParent1Child2Component } from './app-parent1-child2/app-parent1-child2.component';
import { AppParent2Child1Component } from './app-parent2-child1/app-parent2-child1.component';
import { AppParent2Child2Component } from './app-parent2-child2/app-parent2-child2.component';

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
    ProductCreateComponent,
    AppParent1Component,
    AppParent2Component,
    AppParent1Child1Component,
    AppParent1Child2Component,
    AppParent2Child1Component,
    AppParent2Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
