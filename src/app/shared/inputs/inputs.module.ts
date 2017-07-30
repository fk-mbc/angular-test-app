import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextboxComponent } from './input-textbox/input-textbox.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDropdownComponent } from './input-dropdown/input-dropdown.component';

export const inputs = [
  InputTextboxComponent,
  InputTextComponent,
  InputDropdownComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ...inputs
  ],
  declarations: [
    ...inputs
  ]
})
export class InputsModule { }
