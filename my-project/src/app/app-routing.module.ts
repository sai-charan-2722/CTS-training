import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from './status/status.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'adminregister',
    component:AdminregisterComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },
  {
    path:'userprofile/:username',
    component:UserprofileComponent
  },
  {
    path:'adminprofile/:username',
    component:AdminprofileComponent
  },
  {
    path:'status',
    component:StatusComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }