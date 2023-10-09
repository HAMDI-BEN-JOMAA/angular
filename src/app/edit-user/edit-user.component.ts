import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
   id!: number;
constructor(private activatedRoute:ActivatedRoute) {
}
ngOnInit(){
  //this.id=Number(this.activatedRoute.snapshot.paramMap.get('param'));
  this.activatedRoute.paramMap.subscribe(data=>this.id=Number(data.get('param')))
}

}
