import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ModeloCrudComponent } from './views/modelo-crud/modelo-crud.component';
import { ModeloCreateComponent } from './components/modelo/modelo-create/modelo-create.component';
import { ModeloUpdateComponent } from './components/modelo/modelo-update/modelo-update.component';
import { ModeloDeleteComponent } from './components/modelo/modelo-delete/modelo-delete.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "modelo",
    component: ModeloCrudComponent
  },
  {
    path: "modelo/create",
    component: ModeloCreateComponent
  },
  {
    path: "modelo/update/:id",
    component: ModeloUpdateComponent
  },
  {
    path: "modelo/delete/:id",
    component: ModeloDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
