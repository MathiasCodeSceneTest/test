import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModalRoutePage1ExampleComponent } from './modal-route-page1-example.component';

const routes: Routes = [
  {
    path: '',
    component: ModalRoutePage1ExampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLazyRoutingModule {}
