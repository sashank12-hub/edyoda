import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListEmpComponent,
  },
  {
    path: 'edit-emp',
    component: EditEmpComponent,
  },
  {
    path: 'add-emp',
    component: AddEmpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
