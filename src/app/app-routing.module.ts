import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {ListUserComponentComponent} from "./list-user-component/list-user-component.component";
import {Worshop2Component} from "./worshop2/worshop2.component";
import {AdduserComponent} from "./adduser/adduser.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {MainInvoiceComponentComponent} from "./main-invoice-component/main-invoice-component.component";
import {InvoiceComponentComponent} from "./invoice-component/invoice-component.component";



const routes: Routes =[
  { path: '',        component: Worshop2Component },
  { path: 'home',        component: Worshop2Component },
  { path: 'users',        component: ListUserComponentComponent  , children:[
      { path: 'add',        component: AdduserComponent },
    ]},
  { path: 'edit/:param',        component: EditUserComponent },
  { path: 'invoice-management', component:  MainInvoiceComponentComponent},
  { path: 'invoice/:id/:active', component: InvoiceComponentComponent },
  { path: 'invoice', component: InvoiceComponentComponent },
  { path: '**',        component: Worshop2Component },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
