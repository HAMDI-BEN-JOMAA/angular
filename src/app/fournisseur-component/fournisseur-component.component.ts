import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {
  idFournisseur = 105;
  code = 'A104B89';
  libelle = 'MyTeck';
  hide:boolean=true;
  Hide(){
this.hide=!this.hide;
}
}
