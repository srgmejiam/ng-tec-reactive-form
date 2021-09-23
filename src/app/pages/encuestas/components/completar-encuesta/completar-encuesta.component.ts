import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Encuesta } from '../../models/encuesta';

@Component({
  selector: 'app-completar-encuesta',
  templateUrl: './completar-encuesta.component.html',
  styleUrls: ['./completar-encuesta.component.scss']
})
export class CompletarEncuestaComponent implements OnInit {

  public encuestaFrm: FormGroup = this.fb.group({});
  public preguntas: FormArray = this.fb.array([]);

  //TRAER LUEGO DE LA BD UTILIZANDO HTTP REQUEST PARA LA PI
  public encuestaBD: Encuesta = {
    nombre: 'NOMBRE DE LA ENCUESTA',
    preguntas: [
      {
        descripcion: '¿PREGUNTA NÚMERO 1?',
        opciones: [
          'OPCIÓN 1',
          'OPCIÓN 2',
          'OPCIÓN 3',
          'OPCIÓN 4'
        ]
      },
      {
        descripcion: '¿PREGUNTA NÚMERO 2?',
        opciones: [
          'OPCIÓN 1',
          'OPCIÓN 2',
          'OPCIÓN 3',
          'OPCIÓN 4'
        ]
      },
      {
        descripcion: '¿PREGUNTA NÚMERO 3?',
        opciones: [
          'OPCIÓN 1',
          'OPCIÓN 2'
        ]
      }
    ]
  };

  constructor(
    private fb: FormBuilder
  ) {
    this.encuestaFrm = this.crearEncuestaFrm();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.encuestaBD.preguntas.forEach((item) => this.agregarPregunta());

    this.encuestaFrm.patchValue(this.encuestaBD);
  }

  public get preguntasFrm() {
    return this.encuestaFrm.get('preguntas') as FormArray;
  }

  private crearEncuestaFrm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required]],
      preguntas: this.fb.array([])
    });
  }

  private crearPregunta() : FormGroup {
    return this.fb.group({
      descripcion: ['', [Validators.required]],
      respuesta: ['', [Validators.required]]
    });
  }

  private agregarPregunta() {
    this.preguntas = this.preguntasFrm;
    this.preguntas.push(this.crearPregunta());
  }

  public onSubmit() {

    console.log(this.encuestaFrm.value);

    if(this.encuestaFrm.invalid) return;
  }
}
