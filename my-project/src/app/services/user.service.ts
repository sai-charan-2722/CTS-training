import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { Application } from '.././models/application';
import { User } from '.././models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpClient=inject(HttpClient)

  
  // userLoginStatus = signal(false)

  // getUserLoginStatus(){
  //   return this.userLoginStatus()
  // }

  // setUserLoginStatus(value:boolean){
  //   this.userLoginStatus.set(value)
  // }

  userLoginStatus = new BehaviorSubject<boolean>(false);

  getUserLoginStatus():Observable<any>{
    return this.userLoginStatus.asObservable();
  }

  setUserLoginStatus(value:boolean){
    this.userLoginStatus.next(value);
  }

  currentUser = new BehaviorSubject<User>({
    username:'',
    password:'',
    email:'',
    dob:''
  });

  getCurrentUser():Observable<User>{
    return this.currentUser.asObservable();
  }

  setCurrentUser(user:User){
    this.currentUser.next(user);
  }
 
 createStudentUser(newUser:User):Observable<any>{
  return this.httpClient.post('http://localhost:3000/students',newUser)
 }

 createAdminUser(newUser:User):Observable<any>{
  return this.httpClient.post('http://localhost:3000/admins',newUser)
 }
 

 //user login
 
 userStudentLogin(usercredobj):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/students?username=${usercredobj.username}`)
 }

 userAdminLogin(usercredobj):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/admins?username=${usercredobj.username}`)
 }

 getUserByUsername(username:string):Observable<any>{
  return this.httpClient.get(`http://localhost:3000/users?username=${username}`)
 }


 createApplication(newApplication:Application):Observable<any>{
  return this.httpClient.post('http://localhost:3000/applications',newApplication)
 }

 getAllApplications():Observable<any>{
  return this.httpClient.get('http://localhost:3000/applications')
 }

 deleteApplication(id:string):Observable<any>{
  console.log(id)
  return this.httpClient.delete(`http://localhost:3000/applications/${id}`)
 }

 updateApplication(id:string,app:any):Observable<any>{
  console.log(id,app)
  return this.httpClient.patch(`http://localhost:3000/applications/${id}`,app)
 }

}
