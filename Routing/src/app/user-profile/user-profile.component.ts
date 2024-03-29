import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
    // users:User[]=[{
    //   username:"Charan",
    //   email:"cherryyadav@gmail.com"
    // },{
    //   username:"Kulfiii",
    //   email:"kulfii@micro.com"
    // },{
    //   username:"gana",
    //   email:"gana@amazon.com"
    // }
    // ]

    // userEditStatus:boolean = false;
    // fb = inject(FormBuilder);

    // // userEditForm = new FormGroup({
    // //   username: new FormControl(''),
    // //   email:new FormControl('')
    // // })

    // userEditForm = this.fb.group({
    //   username:[''],
    //   email:['']
    // })

    // onUserEdit(index:number){
    //   this.userEditStatus = true;
    //   this.userEditForm.get('username').setValue(this.users[index].username);
    //   this.userEditForm.get('email').setValue(this.users[index].email);
    // }

    // onUserSave(index:number){
    //   this.userEditStatus = false;
    //   this.users[index]= <User> this.userEditForm.value;

      
    // }

    activatedRoute = inject(ActivatedRoute);
    userService = inject(UserService);

    username:string;
    userData:any;

    ngOnInit():void{
      this.username = this.activatedRoute.snapshot.paramMap.get('username');
      
      this.userService.getUserByUsername(this.username).subscribe({
        next:(userList)=>{
          console.log(userList);
          this.userData = userList[0];
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }

    




}


// interface User{
//   username:string,
//   email:string
// }