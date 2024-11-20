import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from '../user.action';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{
  users: any;
  constructor(public userService:UserService, private store:Store<any>){}
  data:any;
  getComments(){
    this.userService.getData().subscribe({
      next:(res)=>{
        console.log(res);
        this.data = res;
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.store.select('users').subscribe(
      data=>{
        console.log(data.users)
        this.users = data.users;
      }
    )
  }
}
