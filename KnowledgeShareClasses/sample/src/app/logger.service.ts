import { Injectable,signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  // userLoginStatus = new BehaviorSubject<boolean>(false);

  // setUserLoginStatus(value:boolean){
  //   this.userLoginStatus.next(value);
  // }
  // getUserLoginStatus(){
  //   return this.userLoginStatus.asObservable();
  // }

  userLoginStatus = signal(false);

  setUserLoginStatus(value:boolean){
    this.userLoginStatus.set(value);
    console.log(this.userLoginStatus());
  }

  getUserLoginStatus(){
    console.log(this.userLoginStatus());
    return this.userLoginStatus();
  }
}
