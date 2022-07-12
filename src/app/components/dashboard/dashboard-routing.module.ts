import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonasComponent } from './personas/personas.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

const routes: Routes = [
  { path: '', component:DashboardComponent, children: [
    {path: '', component:InicioComponent},
    {path: 'personas', component:PersonasComponent},
    {path: 'tarjetas', component:TarjetasComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
