import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private store:Store){}
  updateName(name){
    this.store.dispatch({type:"name-edit",payload:name.value});
    name.value = "";
  }
  updateEmail(email){
    this.store.dispatch({type:"email-edit",payload:email.value});
    email.value="";
  }
  updateMobile(mbl){
    this.store.dispatch({type:"mobile-edit",payload:mbl.value});
    mbl.value="";
  }

  status:boolean = false;
  toggle(){
    this.status = !this.status;
  }
}
