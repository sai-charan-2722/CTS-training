import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from '../logger.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder, private userService: UserService, private router:Router, private logServ:LoggerService){}
  loginform:FormGroup;
  ngOnInit(): void {
    this.loginform = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  
  

  get username(){
    return this.loginform.get('username');
  }

  get password(){
    return this.loginform.get('password');
  }

  onLogin(){
    this.userService.loginUser(this.loginform.value).subscribe({
      next:(res)=>{
        console.log(res);
        this.logServ.setUserLoginStatus(true);
        this.logServ.setUserLogin(true);
        this.router.navigate(['/posts']);
      }
    })
  }
}
