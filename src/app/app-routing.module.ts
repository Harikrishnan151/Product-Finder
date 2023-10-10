import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductsComponent } from './main-products/main-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
  path:'', redirectTo:'mainProducts',pathMatch:'full'
  },
  {
  path:'mainProducts', component:MainProductsComponent 
  },
  {
  path:'mainProducts/viewProduct/:Id',component:ViewProductComponent 
  } ,
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
