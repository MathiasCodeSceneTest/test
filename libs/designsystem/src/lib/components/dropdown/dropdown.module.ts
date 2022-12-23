import { NgModule } from '@angular/core';
import { CardModule } from '@kirbydesign/designsystem/card';
import { ButtonComponent } from '../button/button.component';
import { FormFieldModule } from '../form-field/form-field.module';
import { IconModule } from '../icon';
import { ItemModule } from '../item';
import { PopoverComponent } from '../popover/popover.component';
import { DropdownComponent } from './dropdown.component';
import { KeyboardHandlerService } from './keyboard-handler.service';

const declarations = [DropdownComponent];

@NgModule({
  imports: [CardModule, IconModule, ItemModule, FormFieldModule, PopoverComponent, ButtonComponent],
  declarations: [...declarations],
  exports: [...declarations],
  providers: [KeyboardHandlerService], // TODO: Figure out if this belongs here.
})
export class DropdownModule {}
