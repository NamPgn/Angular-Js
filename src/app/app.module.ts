import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './page/product/product.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpdateComponent } from './page/update/update.component';
import { DetailProductComponent } from './page/detail-product/detail-product.component';
import { AddComponent } from './page/add/add.component';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { LoginComponent } from './page/authen/login/login.component';
import { SignUpComponent } from './page/authen/register/sign-up.component';
import { LogoutComponentComponent } from './page/authen/logout-component/logout-component.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    HomeComponent,
    UpdateComponent,
    DetailProductComponent,
    AddComponent,
    FooterComponentComponent,
    NotFoundPageComponent,
    HeaderComponentComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponentComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//đầu tiên là phải imporrt cái thằng http request để tương tác với api
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
