import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KirbyModule } from '@kirbydesign/designsystem';
import { MenuDefaultExampleComponent } from './examples/default';
import { MenuAdvancedExampleComponent } from './examples/advanced';
import { MenuSelectableExampleComponent } from './examples/selectable';
import { MenuCustomButtonExampleComponent } from '~/app/examples/menu-example/examples/customButton';

const COMPONENT_DECLARATIONS = [
  MenuDefaultExampleComponent,
  MenuAdvancedExampleComponent,
  MenuSelectableExampleComponent,
  MenuCustomButtonExampleComponent,
];

@NgModule({
  imports: [CommonModule, KirbyModule],
  declarations: COMPONENT_DECLARATIONS,
  exports: COMPONENT_DECLARATIONS,
})
export class MenuExampleModule {}
