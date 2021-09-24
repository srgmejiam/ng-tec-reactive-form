import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/form-controls/input/input.component';

const sharedComponents = [
  InputComponent
];

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...sharedComponents
  ]
})
export class CoreModule { }
