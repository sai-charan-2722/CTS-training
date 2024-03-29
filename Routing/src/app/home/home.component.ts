import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //users:any = {};
  data:userObj[] = [];
  obj:userObj={}
  apiService = inject(ApiService);

  ngOnInit():void {
    this.apiService.getUsers().subscribe({
      next:(users) => {
      //this.users = users;
      this.data = users.data;
      console.log(this.data);
    },error:(error) => {
      console.log(error)
    }}
  );
  }

  display(event:Event,user:userObj){
    if(event) event.preventDefault();
    this.obj = user;
    console.log(this.obj);
  }
}

interface userObj{
  id?:number,
  email?:string,
  first_name?:string,
  last_name?:string,
  avatar?:string
}