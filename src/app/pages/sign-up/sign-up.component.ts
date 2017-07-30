import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  cards = [
    {
      title: 'Personal Informations',
      text: 'Please enter your Personal Informations.'
    },
    {
      title: 'User Account data',
      text: 'Please enter username and password for login.'
    }
  ]

  signupForm: FormGroup;

  inputs = [
    {
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }
  ]

  toFormGroup(inputs) {
    const group: any = {};

    inputs.forEach(input => {
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required) : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  constructor() { }

  ngOnInit() {
    this.signupForm = this.toFormGroup(this.inputs);
  }

}
