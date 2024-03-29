import { Component, inject, OnInit } from '@angular/core';
import { Application } from '../models/application';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrl: './adminprofile.component.css'
})
export class AdminprofileComponent implements OnInit {
    userService = inject(UserService)
    applications:any;
    status:boolean = true;
    approveStatus:string;


    ngOnInit():void{
        this.applications = this.userService.getAllApplications()
    }
    onApprove(id:string,app:Application){
        this.status = false;
        this.approveStatus = 'Application Approved'
        app['status']="Approved";
        this.userService.updateApplication(id,app).subscribe(
          (res)=>{console.log(res)},
          (err)=>{
            console.log(err)
          }
        )
    }

    onReject(id:string){
      this.userService.deleteApplication(id).subscribe((res)=>console.log(res),(err)=>{console.log(err)});
    }
    

    
}
