import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  DataTablesModule
];


@NgModule({
  declarations: [

  ],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class SharedModule { }
