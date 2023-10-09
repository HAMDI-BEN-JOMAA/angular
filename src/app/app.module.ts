import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Worshop2Component } from './worshop2/worshop2.component';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { FournisseurComponentComponent } from './fournisseur-component/fournisseur-component.component';
import { ListFournisseurComponentComponent } from './list-fournisseur-component/list-fournisseur-component.component';
import { ListProduitComponentComponent } from './list-produit-component/list-produit-component.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Worshop2Component,
    ListUserComponentComponent,
    FournisseurComponentComponent,
    ListFournisseurComponentComponent,
    ListProduitComponentComponent,
    AdduserComponent,
    EditUserComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
