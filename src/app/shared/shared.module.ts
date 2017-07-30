import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxErrorsModule } from '@ultimate/ngxerrors';


export const sharedModules = [
  CommonModule,
  FormsModule,
  NgxErrorsModule,
  ReactiveFormsModule,
]

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules]
})
export class SharedModule { }
