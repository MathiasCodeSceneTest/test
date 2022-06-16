import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KirbyModule } from '@kirbydesign/designsystem';

import { ExamplesSharedModule } from '../examples.shared.module';

import { ModalCompactExampleComponent } from './compact-example/modal-compact-example.component';
import { EmbeddedModalExampleComponent } from './embedded-modal-example/embedded-modal-example.component';
import { ModalExampleConfigurationComponent } from './modal-example-configuration/modal-example-configuration.component';
import { ModalExampleDefaultComponent } from './modal-example-default.component';
import { ModalExampleOutletComponent } from './modal-example-outlet.component';
import { ModalExampleComponent } from './modal-example.component';

const COMPONENT_DECLARATIONS = [
  ModalExampleComponent,
  ModalExampleDefaultComponent,
  ModalExampleConfigurationComponent,
  ModalExampleOutletComponent,
  EmbeddedModalExampleComponent,
  ModalCompactExampleComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, KirbyModule, ExamplesSharedModule],
  declarations: COMPONENT_DECLARATIONS,
  exports: COMPONENT_DECLARATIONS,
})
export class ModalExampleModule {}
