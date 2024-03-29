import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from './models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient=inject(HttpClient)

  userLoginStatus = new BehaviorSubject(false);

  getUserLoginStatus():Observable<any>{
    return this.userLoginStatus.asObservable();
  }

  
 
 createUser(newUser:User):Observable<any>{
  return this.httpClient.post('http://localhost:3000/users',newUser)
 }
 

 //user login
 
 userlogin(usercredobj):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/users?username=${usercredobj.username}`)
 }

 getUserByUsername(username:string):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/users?username=${username}`)
 }
}
