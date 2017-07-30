import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { LoginService } from '../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  observeLoggedIn: boolean;
  isLoggedInSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.createForm();
  }

  ngOnInit() {
    this.isLoggedInSubscription = this.loginService.observeLoggedIn.subscribe(value => this.observeLoggedIn = value);
  }

  ngOnDestroy() {
    console.log('unsubscribe');
    this.isLoggedInSubscription.unsubscribe();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginService.logIn(this.loginForm.controls.name.value, this.loginForm.controls.password.value);
      this.loginForm.reset();
    } else {
      this.markAsDirtyAndTouched(this.loginForm);
    }
  }

  onLogout() {
    this.loginService.logOut();
  }

  markAsDirtyAndTouched(group: FormGroup | FormArray) {
    group.markAsDirty();
    group.markAsTouched();
    for (const i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsDirty();
        group.controls[i].markAsTouched();
      } else {
        this.markAsDirtyAndTouched(group.controls[i]);
      }
    }
  }

}
