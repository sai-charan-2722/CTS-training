import { Component,inject } from '@angular/core';
import {FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';

import {Router} from '@angular/router'
import { Seller } from '../models/seller';
import { User } from '../models/users';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {  
 
  fileName:string;
  file:File;
//getter and setter methods
  get username(){
    return this.registerForm.get('username')
  }
  get password(){
    return this.registerForm.get('password')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get address(){
    return this.registerForm.get('address')
  }
  get companyName(){
    return this.registerForm.get('companyName')
  }
 
 
  duplicateUserStatus:boolean=false;
  duplicateSellerStatus:boolean=false;
  router=inject(Router)
  userService=inject(UserService);
  registerForm:FormGroup;
  fb:FormBuilder=inject(FormBuilder);
 
  ngOnInit(){
    this.registerForm=this.fb.group({
      registerType:'user',
      username:['',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]],
      password:['',Validators.required],
      email:['',Validators.required],
      address:[''],
      pic:[''],
      companyName:['']
 
    })
  }

  onChange(file:File){
    if(file){
      this.fileName = file.name
    }
  }
 
  onSubmit(){

    let formData = new FormData();

    formData.append('pic',this.file)
    formData.append('userObj',JSON.stringify(this.registerForm.value))

    if(this.registerForm.valid){
      const formData=this.registerForm.value;
      if(formData.registerType==='user'){
        let {username,password,email,address}=this.registerForm.value;
        let newUser=new User(username,password,email,address);
        this.userService.createUser(formData).subscribe(
          (res)=>{
           
            //navigate to login
            if(res.message==="User created"){
              console.log(res)
              this.router.navigate(['/login'])
            }
            else{
              this.duplicateUserStatus=true;
            }
           
          },(error)=>{
            console.log('error in user creation',error)
          }
        )
   
      }
      else if(formData.registerType==='seller'){
        let {username,password,email,companyName}=this.registerForm.value;
        let newSeller=new Seller(username,password,email,companyName);
        console.log(newSeller)
        this.userService.createSeller(newSeller).subscribe(
          (res)=>{
            //navigate to login
            console.log("Hello");
            if(res.message==="Seller created"){
              console.log(res)
              this.router.navigate(['/login'])
            }
            else{
              this.duplicateSellerStatus=true;
            }
           
          },(error)=>{
            console.log('error in seller creation',error)
          }
        )
      }
      else{
        console.log('form is invalid')
      }
    }
   
  }
 
 }