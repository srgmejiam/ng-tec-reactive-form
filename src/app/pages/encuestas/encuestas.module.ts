import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestasComponent } from './pages/encuestas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearEncuestaComponent } from './components/crear-encuesta/crear-encuesta.component';
import { CompletarEncuestaComponent } from './components/completar-encuesta/completar-encuesta.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    EncuestasComponent,
    CrearEncuestaComponent,
    CompletarEncuestaComponent
  ],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class EncuestasModule { }
