import { Injectable,signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  userLoginStatus = new BehaviorSubject<boolean>(false);

  setUserLoginStatus(value:boolean){
    this.userLoginStatus.next(value);
  }
  getUserLoginStatus(){
    return this.userLoginStatus.asObservable();
  }

  userLogin = signal(false);

  setUserLogin(value:boolean){
    this.userLogin.set(value);
    console.log(this.userLogin());
  }

  getUserLogin(){
    console.log(this.userLogin());
    return this.userLogin();
  }
}
