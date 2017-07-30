import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    SignUpComponent,
    UserComponent,
    LoginComponent
  ]
})
export class PagesModule { }
