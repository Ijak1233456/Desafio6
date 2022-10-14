import { ProductoComponent } from './../producto/producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ContenidoComponent } from './contenido.component';

const routes: Routes = [
  { path: '', component: ContenidoComponent, children: [
    { path: 'producto',  component: ProductoComponent },
    { path: 'lista-alumnos', component: ListaAlumnosComponent }
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
