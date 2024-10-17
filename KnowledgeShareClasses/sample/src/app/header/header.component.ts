import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private logServ:LoggerService){}
  status:boolean;
  ngOnInit(): void {
    this.logServ.getUserLoginStatus().subscribe(
      (value)=>{
        this.status = value;
      }
    )
  }
  

 

}
