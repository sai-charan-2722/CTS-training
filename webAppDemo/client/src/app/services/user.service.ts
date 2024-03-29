import { Injectable,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';


import { User } from '../models/users';
import { Seller } from '../models/seller';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  httpClient=inject(HttpClient);
 userLoginStatus=new BehaviorSubject<boolean>(false);
 currentUser=new BehaviorSubject<User>({
  username:'',
  password:'',
  email:'',
  address:''
 })
 
 sellerLoginStatus=new BehaviorSubject<boolean>(false);
 currentSeller=new BehaviorSubject<Seller>({
  username:'',
  password:'',
  email:'',
  companyName:''
 })
 
 setUserLoginStatus(value:boolean){
  this.userLoginStatus.next(value)
 }
 setSellerLoginStatus(value:boolean){
  this.sellerLoginStatus.next(value)
 }
 
 setCurrentUser(user:User){
  this.currentUser.next(user)
 }
 setCurrentSeller(seller:Seller){
  this.currentSeller.next(seller)
 }
 
 getUserLoginStatus(){
   return this.userLoginStatus.asObservable()
 }
 getSellerLoginStatus(){
  return this.sellerLoginStatus.asObservable()
}
 
 getCurrentUser(){
  return this.currentUser.asObservable()
 }
 
 getCurrentSeller(){
  return this.currentSeller.asObservable()
 }
  //create user(User registration)
 
  createUser(newUser:User):Observable<any>{
    return this.httpClient.post('http://localhost:4000/user-api/user',newUser)
  }
 
  createSeller(newSeller:Seller):Observable<any>{
    return this.httpClient.post('http://localhost:4000/seller-api/seller',newSeller)
  }
 
 
  //user login
  userLogin(userCredObj):Observable<any>{
    return this.httpClient.post('http://localhost:4000/user-api/login',userCredObj)
  }
//seller login
  sellerLogin(sellerCredObj):Observable<any>{
    return this.httpClient.post('http://localhost:4000/seller-api/login',sellerCredObj)
  }
     
     //get user by username
     getUserByUsername(username):Observable<any>{
      return this.httpClient.get(`http://localhost:3000/users?username=${username}`)
    }
       
  //user logout
   
  userLogout(){
    this.setUserLoginStatus(false)
  }
 
 //updateUserDetails
 updateUserDetails(updatedUser:any):Observable<any>{
  return this.httpClient.put('http://localhost:3000/users',updatedUser);
 }
}