import { IonCheckbox, IonItem } from '@ionic/angular';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { MockComponents } from 'ng-mocks';

import { DesignTokenHelper } from '@kirbydesign/core';

import { ItemComponent } from '../item';

import { CheckboxComponent } from './checkbox.component';

const size = DesignTokenHelper.size;

describe('CheckboxComponent in Item', () => {
  let spectator: SpectatorHost<CheckboxComponent>;
  let ionCheckbox: HTMLIonCheckboxElement;

  const createHost = createHostFactory({
    component: CheckboxComponent,
    declarations: MockComponents(ItemComponent, IonItem, IonCheckbox),
  });

  describe('by default', () => {
    beforeEach(() => {
      spectator = createHost(`
    <kirby-item>
      <kirby-checkbox></kirby-checkbox>
    </kirby-item>`);
      ionCheckbox = spectator.query('ion-checkbox');
    });

    it(`icon should not have any margin`, () => {
      expect(ionCheckbox).toHaveComputedStyle({
        margin: '0px',
      });
    });

    it(`should have z-index`, () => {
      expect(spectator.element).toHaveComputedStyle({
        'z-index': '1',
      });
    });
  });

  describe('slotted start', () => {
    beforeEach(() => {
      spectator = createHost(`
    <kirby-item>
      <kirby-checkbox slot="start"></kirby-checkbox>
    </kirby-item>`);
      ionCheckbox = spectator.query('ion-checkbox');
    });

    it(`should have correct vertical spacing`, () => {
      expect(spectator.element).toHaveComputedStyle({
        'margin-inline-end': size('xs'),
      });
    });
  });
});
