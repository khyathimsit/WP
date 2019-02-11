import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './start-page/main-page/main-page.component';
import { CheckoutPageComponent } from './start-page/checkout-page/checkout-page.component';
import { TopnavbarPageComponent } from './start-page/topnavbar-page/topnavbar-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import {ProductPageComponent} from './start-page/product-page/product-page.component';
import {SearchPageComponent} from './start-page/search-page/search-page.component';
import {OrderHistroyComponent} from './start-page/order-histroy/order-histroy.component';
import {LoginpageComponent} from './start-page/loginpage/loginpage.component';
import {RegisterpageComponent} from './start-page/registerpage/registerpage.component';
import {CartComponent} from './start-page/cart/cart.component';
import {DataService} from './data.service';
import {UserdataService} from './userdata.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FilterPipe} from './filter.pipe';
// import { FilterPipe } from './start-page/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CheckoutPageComponent,
    TopnavbarPageComponent,
    StartPageComponent,
    ProductPageComponent,
    SearchPageComponent,
    OrderHistroyComponent,
    LoginpageComponent,
    RegisterpageComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    // FilterPipe
    // MatInputModu

  ],
  providers: [DataService, UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
