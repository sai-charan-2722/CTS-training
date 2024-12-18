import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReversePipe } from './reverse.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './userReducer';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostsComponent } from './posts/posts.component';
import { CreateDirective } from './create.directive';
import { HideDirective } from './hide.directive';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { userEffect } from './user.effect';
import { usersReducer } from './user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ReversePipe,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FeedbackComponent,
    PagenotfoundComponent,
    PostsComponent,
    CreateDirective,
    HideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({user:userReducer,users:usersReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([userEffect])
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
