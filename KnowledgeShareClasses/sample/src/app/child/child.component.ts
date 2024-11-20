import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent{
  user:any ={};
  constructor(private store:Store<any>){
    store.select('user').subscribe({
      next:(data)=>{
        this.user = data;
        console.log(this.user);
      }
    })
  }
  status:boolean = false;
  toggle(){
    this.status = !this.status;
  }
}