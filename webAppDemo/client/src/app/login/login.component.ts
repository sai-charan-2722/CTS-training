import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router'
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
 
 
  fb: FormBuilder = inject(FormBuilder);
  userService = inject(UserService)
  router = inject(Router)
 
  userCredentialsError={
    userCredErrStatus:false,
    userCredErrMsg:""
  }
userCredentials:FormGroup
  ngOnInit(){
    this.userCredentials = this.fb.group({
      loginType:[''],
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      password: ['', Validators.required]
    })
  }
 
 
  onSubmitUser() {
   
    console.log(this.userCredentials.value);
   
   const formData=this.userCredentials.value;
 
   if(formData.loginType==='user'){
    this.userService.userLogin(this.userCredentials.value).subscribe(
      (res) => {
        console.log(res)
        if (res.message === 'login successs') {
          //store token in local/session storage
          localStorage.setItem('token', res.token)
          //set user status and current user to service
          this.userService.setUserLoginStatus(true)
          this.userService.setCurrentUser(res.user)
          //navigate to user profile
          //this.router.navigate([`/user-profile/${res.user.username}`])
        }
        else {
          this.userCredentialsError={
            userCredErrStatus:true,
            userCredErrMsg:res.message
          }
        }
      }, (error) => {
        console.log('err in user login', error)
      }
    )
   }
 
   else{
    this.userService.sellerLogin(this.userCredentials.value).subscribe(
      (res) => {
        console.log(res)
        if (res.message === 'login successs') {
          //store token in local/session storage
          localStorage.setItem('token', res.token)
          //set user status and current seller to service
          this.userService.setSellerLoginStatus(true)
          this.userService.setCurrentSeller(res.seller)
          //navigate to user profile
          //this.router.navigate([`/user-profile/${res.seller.username}`])
        }
        // else {
        //   this.userCredentialsError={
        //     userCredErrStatus:true,
        //     userCredErrMsg:res.message
        //   }
        // }
      }, (error) => {
        console.log('err in seller login', error)
      }
    )
   }
   
  }
}