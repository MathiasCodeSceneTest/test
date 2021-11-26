import { IonItem } from '@ionic/angular';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { ItemComponent } from '../item';

import { ItemGroupComponent } from './item-group.component';

describe('ItemGroup', () => {
  let spectator: SpectatorHost<ItemGroupComponent>;

  const createHost = createHostFactory({
    component: ItemGroupComponent,
    declarations: [ItemGroupComponent, MockComponent(IonItem), MockComponent(ItemComponent)],
  });

  beforeEach(() => {
    spectator = createHost<ItemGroupComponent>(`
      <kirby-item-group>
        <kirby-item>Test Item</kirby-item>
        <kirby-item>Test Item</kirby-item>
        <kirby-item>Test Item</kirby-item>
        <kirby-item>Test Item</kirby-item>
      </kirby-item-group>`);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render items in group', () => {
    const items = spectator.queryHostAll('kirby-item');

    expect(items).toHaveLength(4);
  });

  it('should have ARIA role', () => {
    const itemGroup = spectator.queryHost('kirby-item-group');

    expect(itemGroup.attributes['role']).toBeDefined();
  });
});
