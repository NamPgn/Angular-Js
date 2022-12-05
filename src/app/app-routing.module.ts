import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './page/product/product.component';
import { HomeComponent } from './page/home/home.component';
import { UpdateComponent } from './page/update/update.component';
import { DetailProductComponent } from './page/detail-product/detail-product.component';
import { AddComponent } from './page/add/add.component';
import { NotFoundPageComponent } from './page/not-found-page/not-found-page.component';
import { LoginComponent } from './page/authen/login/login.component';
import { SignUpComponent } from './page/authen/register/sign-up.component';
import { AuthenticationGuard } from './share/authentication.guard';
import { LogoutComponentComponent } from './page/authen/logout-component/logout-component.component';


const router: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthenticationGuard] },
  {
    path: "product", component: ProductComponent, children: [
    ], canActivate: [AuthenticationGuard]
  },
  { path: "product/add-product", component: AddComponent, canActivate: [AuthenticationGuard] },
  { path: "product/update", component: UpdateComponent, canActivate: [AuthenticationGuard] },
  { path: "product/update/:id", component: UpdateComponent, canActivate: [AuthenticationGuard] },
  { path: "product/detailProduct/:id", component: DetailProductComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: SignUpComponent },
  { path: "logout", component: LogoutComponentComponent },
  { path: "**", component: NotFoundPageComponent },
]
@NgModule({
  declarations: [

  ],
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    [RouterModule.forRoot(router)]
  ]
})
export class AppRoutingModule { }
