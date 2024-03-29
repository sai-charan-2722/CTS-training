import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor() {}

  //injecting router so to navigate to the required component
  router = inject(Router);

  //array having all admin users
  users: Login[] = [
    {
      username: 'Cognizant',
      password: 'Hello123',
    },
  ];

  //function to check the login status if the correct user is logged in
  checkUser(loginForm: any) {
    let flag = false;
    for (let user of this.users) {
      if (
        user.username === loginForm.username &&
        user.password === loginForm.password
      ) {
        flag = true;
        break;
      }
    }
    // if the user credentials are true router to header component
    if (flag === true) {
      this.router.navigate(['home']);
    }else{
      alert('The credentials entered are incorrect!')
    }
  }
}
