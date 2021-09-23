import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { UsuariosComponent } from './pages/usuarios.component';

const routes: Routes = [{ 
  path: '', component: UsuariosComponent,
  children: [
    {
      path: 'iniciar-sesion',
      component: IniciarSesionComponent
    },
    {
      path: 'registrarse',
      component: RegistrarseComponent
    }
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
