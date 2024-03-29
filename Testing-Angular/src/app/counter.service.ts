import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  name:string='Soumya';
  nameSubject = new BehaviorSubject(this.name)

  changeToCharan(){
    this.name='Charan';
    this.nameSubject.next(this.name)
  }

  // decrementCounter(){
  //   this.counter--;
  //   this.counterSubject.next(this.counter)
  // }

  // resetCounter(){
  //   this.counter=0;
  //   this.counterSubject.next(this.counter)
  // }

  getCounter(){
    return this.nameSubject.asObservable();
  }
  constructor() { }
}
