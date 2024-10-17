import { Component, inject, OnInit} from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent{
  // constructor(public logServ:LoggerService){}

  logServ = inject(LoggerService)

  changeStatustoTrue(){
    this.logServ.setUserLoginStatus(true);
  }

  changeStatustoFalse(){
    this.logServ.setUserLoginStatus(false);
  }
  
}