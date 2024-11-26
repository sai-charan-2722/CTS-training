import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getComments, getUsers } from '../user.action';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{
  users: any;
  constructor(public userService:UserService, private store:Store<any>){}
  comment:any;
  getCommentandUsers(){
    this.store.dispatch(getUsers());
    this.store.dispatch(getComments());
    this.store.select('users').subscribe(
      data=>{
        this.users = data.users;
        this.comment = data.comment;
      }
    );
    
  }

  ngOnInit(): void {
    
  }
}
