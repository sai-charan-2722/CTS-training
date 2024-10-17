import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },{
    path:"login",
    component:LoginComponent
  },{
    path:"register",
    component:RegisterComponent
  },{
    path:"parent",
    component:ParentComponent,
    children:[
      {
        path:"feedback",
        component:FeedbackComponent
      },{
        path:"child",
        component:ChildComponent
      }
    ]
  },{
    path:'',
    redirectTo:"home",
    pathMatch:"full"
  },{
    path:'**',
    component:FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
