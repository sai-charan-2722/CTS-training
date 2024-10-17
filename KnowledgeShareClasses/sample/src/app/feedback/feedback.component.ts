import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  constructor(public userService:UserService){}
  data:any;
  getComments(){
    this.userService.getData().subscribe({
      next:(res)=>{
        console.log(res);
        this.data = res;
      }
    })
  }
}
