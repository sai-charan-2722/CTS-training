import { effect, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoggerService } from './logger.service';

export const secureGuard: CanActivateFn = (route, state) => {
  const logServ = inject(LoggerService);
  const router = inject(Router);
  let status:boolean;
  
  logServ.getUserLoginStatus().subscribe({
    next:(res)=>{
      status = res;
    },error:(err)=>{
      console.log(err);
    }
  })

  
  if(status){
    return true;
  }else{
    return router.navigate(['/login']);
  }
};