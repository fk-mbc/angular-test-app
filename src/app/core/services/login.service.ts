import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private _isLoggedIn = false;
  public observeLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this._isLoggedIn);

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  set isLoggedIn(newValue) {
    this._isLoggedIn = newValue;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public logIn(username, password) {
    this.isLoggedIn = true;
    this.observeLoggedIn.next(this.isLoggedIn);

    const subscription = this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params.redirect) {
        this.router.navigate([params.redirect]).then(() => {
          subscription.unsubscribe();
        });
      }
    });
  }

  public logOut() {
    this.isLoggedIn = false;
    this.observeLoggedIn.next(this.isLoggedIn);
  }

}
