import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrl: './adminregister.component.css'
})
export class AdminregisterComponent {
  fb:FormBuilder=inject(FormBuilder);
userService=inject(UserService)
router=inject(Router)
 
user=this.fb.group({
  username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
  password:['',Validators.required],
  email:['',Validators.required],
  dob:['',Validators.required]
});

// getters and setters
get username() {
  return this.user.get('username')
}

get password() {
  return this.user.get('password')
}

get email() {
  return this.user.get('email')
}

get dob() {
  return this.user.get('dob')
}
 
onSubmitUser(){
  let {username,password,email,dob}=this.user.value;
  let newUser=new User(username,password,email,dob);
  this.userService.createAdminUser(newUser).subscribe(
    (res)=>{
      
      //navigate to login
      if(this.user.status==="VALID"){
        console.log(res)
        this.router.navigate(['/adminlogin'])
      }
      
    },
    (err)=>{
      console.log("error in user creation",err)
    }
 
  )
}
}
