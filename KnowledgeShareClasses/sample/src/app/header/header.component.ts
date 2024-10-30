import { Component, effect, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnChanges{
  status:boolean;
  constructor(private logServ:LoggerService, ){
    effect(() => {
      this.status = this.logServ.userLoginStatus();
    });
  }
  
  ngOnInit(): void {
    
  }

  ngOnChanges(){
    
  }
  

 

}
