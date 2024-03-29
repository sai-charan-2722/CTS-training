import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  fb:FormBuilder=inject(FormBuilder);
  userService=inject(UserService);
  router = inject(Router)
 
  userCredentials=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  });

  
  // getters and setters
  get username() {
    return this.userCredentials.get('username')
  }
 
  get password() {
    return this.userCredentials.get('password')
  }
 
  onSubmitUser(){
    this.userService.userAdminLogin(this.userCredentials.value).subscribe(
      (res)=>{
        console.log(res);
        if(res.length===0){
        alert("Invalid Username")
      }else{
        if(this.userCredentials.value.password===res[0].password){
            this.router.navigate([`/adminprofile/${res[0].username}`])
            this.userService.setUserLoginStatus(true);
        }else{
          alert("Invalid password")
        }
      }
    },
      (err)=>{console.log(err)}
    )
 
  }
}
