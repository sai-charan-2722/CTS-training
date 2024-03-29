import { Component, inject } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   
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
    this.userService.userStudentLogin(this.userCredentials.value).subscribe(
      (res)=>{
        console.log(res);
        if(res.length===0){
        alert("Invalid Username")
      }else{
        if(this.userCredentials.value.password===res[0].password){
            this.router.navigate([`/userprofile/${res[0].username}`])
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