import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';

import { LoginGuard } from './guards/login.guard';

export const routes = [
  {
    children: [],
    component: HomeComponent,
    data: {
      name: 'Home',
      title: 'Welcome'
    },
    path: '',
  },
  {
    children: [],
    component: SignUpComponent,
    data: {
      name: 'Sign Up',
      title: 'Get into it'
    },
    path: 'sign-up',
  },
  {
    children: [],
    component: LoginComponent,
    data: {
      name: 'Login',
      title: 'Login'
    },
    path: 'login',
  },
  {
    canActivate: [LoginGuard],
    children: [],
    component: UserComponent,
    data: {
      name: 'User',
      title: 'User'
    },
    path: 'user',
  }
];

export const routingProviders = [LoginGuard];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    routingProviders
  ]
})
export class AppRoutingModule { }
