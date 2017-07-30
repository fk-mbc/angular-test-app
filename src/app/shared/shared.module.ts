import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { ContentCardComponent } from './content-card/content-card.component';
import { InputsModule } from './inputs/inputs.module';


export const sharedModules = [
  CommonModule,
  FormsModule,
  InputsModule,
  NgxErrorsModule,
  ReactiveFormsModule,
]

export const sharedComponents = [
  ContentCardComponent,
]

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
  declarations: [...sharedComponents]
})
export class SharedModule { }
