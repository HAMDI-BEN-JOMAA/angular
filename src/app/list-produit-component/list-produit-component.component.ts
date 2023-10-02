import { Component } from '@angular/core';
import {Produit} from "../models/produit";

@Component({
  selector: 'app-list-produit-component',
  templateUrl: './list-produit-component.component.html',
  styleUrls: ['./list-produit-component.component.css']
})
export class ListProduitComponentComponent {
 list:Produit[]=[

     {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
     {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
     {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
     {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
     {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},

 ]
  tvamodifie:boolean = false ;
  codeProduitRecherche = '';
  produitsFiltres: Produit[] = this.list;
  ajusterTVA(item:Produit) {
item.tauxTVA=0.02;
this.tvamodifie=true ;
  }
  rechercherProduit(): void {
    if (this.codeProduitRecherche) {
      this.produitsFiltres = this.list.filter(item => item.code.startsWith(this.codeProduitRecherche));
    } else {
      this.produitsFiltres = this.list;
    }
  }
  estPrixInferieurA50(item:Produit): boolean {
    return item.prixUnitaire <= 50;
  }
}
