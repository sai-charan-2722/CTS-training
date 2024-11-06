import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PostsComponent } from './posts/posts.component';
import { protectGuard } from './protect.guard';
import { RegisterComponent } from './register/register.component';
import { secureGuard } from './secure.guard';

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
  },
  {
    path:'posts',
    component:PostsComponent,
    canActivate:[secureGuard]
  },{
    path:"parent",
    component:ParentComponent,
    canActivateChild:[protectGuard],
    children:[
      {
        path:"feedback",
        component:FeedbackComponent,
        canActivate:[secureGuard]
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
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
