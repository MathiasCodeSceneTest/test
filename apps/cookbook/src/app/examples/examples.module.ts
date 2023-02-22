import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  IconRegistryService,
  KirbyExperimentalModule,
  KirbyModule,
} from '@kirbydesign/designsystem';
import { SlideModule } from '@kirbydesign/designsystem/slide';

import { CodeViewerModule } from '../shared/code-viewer/code-viewer.module';
import { AccordionExampleModule } from './accordion-example/accordion-example.module';
import { AvatarExampleModule } from './avatar-example/avatar-example.module';
import { BadgeExampleModule } from './badge-example/badge-example.module';
import { CardExampleModule } from './card-example/card-example.module';
import { ChartsExampleModule } from './charts-example/charts-example.module';
import { CheckboxExampleModule } from './checkbox-example/checkbox-example.module';
import { DataTableExampleModule } from './data-table-example/table-example.module';
import { DropdownExampleModule } from './dropdown-example/dropdown-example.module';
import { COMPONENT_DECLARATIONS } from './examples.common';
import { ExamplesSharedModule } from './examples.shared.module';
import { ExperimentalExamplesModule } from './experimental-examples/experimental-examples.module';
import { FlagExampleModule } from './flag-example/flag-example.module';
import { FormFieldExamplesModule } from './form-field-example/form-field-example.module';
import { GridLayoutExamplesModule } from './grid-layout-example/grid-layout-example.module';
import { ItemExampleModule } from './item-example/item-example.module';
import { ItemGroupExampleModule } from './item-group-example/item-group-example.module';
import { ItemSlidingExampleModule } from './item-sliding-example/item-sliding-example.module';
import { LinkExampleModule } from './link-example/link-example.module';
import { ListExamplesModule } from './list-example/list-example.module';
import { ListExperimentalExampleModule } from './list-experimental-example/list-experimental-example.module';
import { ModalExampleModule } from './modal-example/modal-example.module';
import { ModalExperimentalExampleModule } from './modal-experimental-example/modal-experimental-example.module';
import { ProgressCircleExampleModule } from './progress-circle-example/progress-circle-example.module';
import { RadioExampleModule } from './radio-example/radio-example.module';
import { RangeExampleModule } from './range-example/range-example.module';
import { SectionHeaderExampleModule } from './section-header-example/section-header-example.module';
import { SegmentedControlExampleModule } from './segmented-control-example/segmented-control-example.module';
import { ToggleButtonExampleModule } from './toggle-button-example/toggle-button-example.module';
import { VirtualScrollExampleModule } from './virtual-scroll-example/virtual-scroll-example.module';
import { MenuExampleModule } from '~/app/examples/menu-example/menu-example.module';

const IMPORTS = [
  CodeViewerModule,
  ExamplesSharedModule,
  FormFieldExamplesModule,
  ItemExampleModule,
  ListExamplesModule,
  DropdownExampleModule,
  SegmentedControlExampleModule,
  ChartsExampleModule,
  CardExampleModule,
  ItemSlidingExampleModule,
  BadgeExampleModule,
  ProgressCircleExampleModule,
  AvatarExampleModule,
  FlagExampleModule,
  ToggleButtonExampleModule,
  AccordionExampleModule,
  RadioExampleModule,
  CheckboxExampleModule,
  RangeExampleModule,
  LinkExampleModule,
  ModalExampleModule,
  ModalExperimentalExampleModule,
  GridLayoutExamplesModule,
  SectionHeaderExampleModule,
  ItemGroupExampleModule,
  ListExperimentalExampleModule,
  VirtualScrollExampleModule,
  ExperimentalExamplesModule,
  DataTableExampleModule,
  MenuExampleModule,
  SlideModule,
];

@NgModule({
  imports: [CommonModule, RouterModule, KirbyModule, KirbyExperimentalModule, ...IMPORTS],
  declarations: COMPONENT_DECLARATIONS,
  exports: [...COMPONENT_DECLARATIONS, ...IMPORTS],
})
export class ExamplesModule {
  constructor(iconRegistryService: IconRegistryService) {
    // Example of "custom" icons:
    iconRegistryService.addIcons([
      {
        name: 'football',
        svg: 'assets/icons/football.svg',
      },
      {
        name: 'umbrella',
        svg: 'assets/icons/umbrella.svg',
      },
    ]);
  }
}
