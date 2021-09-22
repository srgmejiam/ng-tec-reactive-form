import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {
  
  public reactiveFormExample: FormGroup = this.fb.group({});
  public fullName: string = "dynamicId1";
  private children: FormArray = this.fb.array([]);
  public peaple: Array<any> = [{
    fullName: 'José Narváez',
    email: 'jdnarvaezf@gmail.com'
  }, 
  {
    fullName: 'José Narváez',
    email: 'jdnarvaezf@gmail.com'
  },
  {
    fullName: 'José Narváez',
    email: 'jdnarvaezf@gmail.com'
  }
];

  public dtOptions: DataTables.Settings = {
  };

  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder
  ) {

    this.reactiveFormExample = this.createReactiveFormExample();

  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
  }

  private createReactiveFormExample(): FormGroup {
    return this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      children: this.fb.array([this.createChildForm()])
    });
  }

  private createChildForm(): FormGroup {
    return this.fb.group({
      fullName: [null, [Validators.required]],
      birthDay: [null, [Validators.required]],
    });
  }

  public onSubmit() {

    if(this.reactiveFormExample.invalid) return;

    this.peaple.push(this.reactiveFormExample.value);

  }

  public get childrenArray() {
    return this.reactiveFormExample.get('children') as FormArray;
  } 

  public addChild() {
    this.children = this.childrenArray;
    this.children.push(this.createChildForm());
  }

  public removeChild(index: number) {
    this.children.removeAt(index);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
