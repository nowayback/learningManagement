import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        {path: 'landing', component: LandingComponent},
        {path: 'userProfile', component: UserProfileComponent},
        { path: '', component: LandingComponent },
        { path: '**', redirectTo: '/' }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
