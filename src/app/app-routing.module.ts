import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsPageComponent} from "./products-page/products-page.component";
import {ShoppingCartPageComponent} from "./shopping-cart-page/shopping-cart-page.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductCreateComponent} from "./product-create/product-create.component";

const routes: Routes = [
  {path: 'products', component: ProductsPageComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'shopping-cart', component: ShoppingCartPageComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
