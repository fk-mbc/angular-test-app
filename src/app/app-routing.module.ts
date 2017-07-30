import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
