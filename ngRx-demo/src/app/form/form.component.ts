import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(public store:Store){}

  updateName(name){
    this.store.dispatch({type:"name-edit",payload:name.value})
  }
  updateEmail(email){
    this.store.dispatch({type:"email-edit",payload:email.value})
  }
  updateMobile(mobile){
    this.store.dispatch({type:"mobile-edit",payload:mobile.value})
  }
}
