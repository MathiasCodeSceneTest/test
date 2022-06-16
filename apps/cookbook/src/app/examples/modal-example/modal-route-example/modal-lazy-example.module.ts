import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KirbyModule } from '@kirbydesign/designsystem';

import { ModalLazyRoutingModule } from './modal-lazy-routing.module';
import { ModalRoutePage1ExampleComponent } from './modal-route-page1-example.component';

@NgModule({
  imports: [CommonModule, ModalLazyRoutingModule, KirbyModule],
  declarations: [ModalRoutePage1ExampleComponent],
  exports: [ModalRoutePage1ExampleComponent],
})
export class ModalLazyExampleModule {}
