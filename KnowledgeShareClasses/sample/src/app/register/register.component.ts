import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from '../logger.service';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  constructor(public fb:FormBuilder,public logger:LoggerService,public userService:UserService,public router:Router){}
  registerForm:FormGroup

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      password:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      dob:['',Validators.required]
    })
  }
  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get dob(){
    return this.registerForm.get('dob');
  }

  onDateSelected(event:Event){
    this.registerForm.patchValue({
      dob:event.target.dispatchEvent
    });
  }

  onFormSubmit(){
    console.log(this.registerForm);
    let {username,password,email,dob} = this.registerForm.value;
    let newUser = new User(username,password,email,dob);
    this.userService.createUser(newUser).subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigate(['/login']);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
