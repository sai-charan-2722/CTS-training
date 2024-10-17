import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngRx-demo';
  user = {};
  constructor(public store:Store<any>){
    store.select('user').subscribe({
      next:(data)=>{
        this.user = data;
        console.log(this.user);
      }
    })
  }
  

  

}
