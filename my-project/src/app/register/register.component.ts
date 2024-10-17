import { Component, inject } from '@angular/core';
import {  FormBuilder,Validators,FormControl,FormGroup} from '@angular/forms'
import { UserService } from '../services/user.service';
import { User } from '../models/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent { 

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
  console.log("1",this.user)
  console.log("2",newUser)
  this.userService.createStudentUser(newUser).subscribe({
    next:(res)=>{
      //navigate to login
      if(this.user.status==="VALID"){
        console.log(res)
        this.router.navigate(['/login'])
      }
    },
    error:(err)=>{
      console.log("error in user creation",err)
    }
  }
  )
}
}
