import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignInService } from '../services/sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  //injecting signIn service
  login = inject(SignInService);

  //declaring form group
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  //Function to check user login (sends the form value to service where the user credentials are checked)
  onSubmit() {
    this.login.checkUser(this.loginForm.value);
  }
}
