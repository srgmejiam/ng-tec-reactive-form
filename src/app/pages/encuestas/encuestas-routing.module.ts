import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletarEncuestaComponent } from './components/completar-encuesta/completar-encuesta.component';
import { CrearEncuestaComponent } from './components/crear-encuesta/crear-encuesta.component';
import { EncuestasComponent } from './pages/encuestas.component';

const routes: Routes = [
  { path: '', 
  component: EncuestasComponent,
  children: [
    {
      path: 'crear-encuesta',
      component: CrearEncuestaComponent
    },
    {
      path: 'completar-encuesta',
      component: CompletarEncuestaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
