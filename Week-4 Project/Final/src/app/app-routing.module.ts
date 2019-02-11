import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginpageComponent} from './start-page/loginpage/loginpage.component';
import {StartPageComponent} from './start-page/start-page.component';
import {RegisterpageComponent} from './start-page/registerpage/registerpage.component';
import {SearchPageComponent} from './start-page/search-page/search-page.component';
import {CartComponent} from './start-page/cart/cart.component';
import {CheckoutPageComponent} from './start-page/checkout-page/checkout-page.component';
import {ProductPageComponent} from './start-page/product-page/product-page.component';
import {AppComponent} from './app.component';
const routes: Routes = [
  {path : '', component : StartPageComponent},
  {path : 'startpage', component : StartPageComponent},
  {path : 'login', component : LoginpageComponent},
  {path : 'register', component : RegisterpageComponent},
  {path : 'searchpage/:id', component : SearchPageComponent},
  {path : 'cart', component:CartComponent},
  {path : 'checkout', component : CheckoutPageComponent},
  {path : 'productpage/:id', component : ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
