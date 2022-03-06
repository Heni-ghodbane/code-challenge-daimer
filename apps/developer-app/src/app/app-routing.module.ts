import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCenterMatrixComponent } from './components/create-center-matrix/create-center-matrix.component';
import { ListCenterMatrixComponent } from './components/list-center-matrix/list-center-matrix.component';

const routes: Routes = [
  { path: '', component: CreateCenterMatrixComponent },
  { path: 'new', component: CreateCenterMatrixComponent },
  { path: 'list', component: ListCenterMatrixComponent },
  { path: 'update/:id', component: CreateCenterMatrixComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
