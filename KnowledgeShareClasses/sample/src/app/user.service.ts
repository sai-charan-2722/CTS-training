import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments/5');
  }

  getUsers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  createUser(newUser:User):Observable<any>{
    return this.http.post('http://localhost:3000/users',newUser);
  }

  loginUser(userCred):Observable<any>{
    return this.http.get(`http://localhost:3000/users?username=${userCred.username}`);
  }
}
