import { Component, NgZone } from '@angular/core';
import { fakeAsync, flush, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonRefresher } from '@ionic/angular';
import { createHostFactory, mockProvider, SpectatorHost, SpyObject } from '@ngneat/spectator';
import { MockDirective } from 'ng-mocks';

import { DesignTokenHelper } from '@kirbydesign/core';

import { FitHeadingDirective } from '../../directives/fit-heading/fit-heading.directive';
import { TestHelper } from '../../testing/test-helper';
import { WindowRef } from '../../types/window-ref';
import { ModalNavigationService } from '../modal/services/modal-navigation.service';
import { TabsComponent } from '../tabs';

import { PageComponent, PageContentComponent } from './page.component';

const size = DesignTokenHelper.size;
const fatFingerSize = DesignTokenHelper.fatFingerSize();

@Component({})
class DummyComponent {}

describe('PageComponent', () => {
  const titleText = 'Test Page';
  const subtitleText = 'Page subtitle';
  let spectator: SpectatorHost<PageComponent>;
  let ionToolbar: HTMLElement;
  let ionContent: HTMLElement;
  let tabBar: SpyObject<TabsComponent>;
  let router: SpyObject<Router>;
  let modalNavigationService: SpyObject<ModalNavigationService>;
  let zone: NgZone;

  const dummyContent = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi aperiam deserunt dolore error esse
            laborum magni natus nihil optio perferendis placeat, quae sed, sequi sunt totam voluptatem! Dicta,
            quaerat!</p>
        <p>Aut, dignissimos dolorum ducimus et rem reprehenderit rerum sunt ut! Ad aliquid beatae cum esse et eveniet
            facere natus numquam obcaecati qui quia quisquam quo repellat repudiandae sit, soluta voluptatibus!</p>
        <p>Aspernatur dolore enim incidunt libero molestiae nostrum quasi? Accusamus aut culpa dolores doloribus laborum
            nesciunt voluptates! Consectetur cumque doloremque eius esse et excepturi hic, inventore mollitia nisi,
            reiciendis, tempora unde!</p>
        <p>Blanditiis, cupiditate distinctio earum illo impedit laborum velit veritatis. Accusamus adipisci alias
            aperiam, assumenda corporis culpa cum debitis exercitationem impedit laborum possimus quam qui repellat,
            saepe similique sint soluta. Unde.</p>`;

  const createHost = createHostFactory({
    component: PageComponent,
    declarations: [PageContentComponent, MockDirective(FitHeadingDirective)],
    imports: [
      TestHelper.ionicModuleForTest,
      RouterTestingModule.withRoutes([
        {
          path: '',
          component: PageComponent,
        },
        {
          path: 'someUrl',
          component: DummyComponent,
        },
      ]),
    ],
    providers: [
      {
        provide: WindowRef,
        useValue: <WindowRef>{ nativeWindow: window },
      },
      mockProvider(TabsComponent, { tabBarBottomHidden: false }),
      mockProvider(ModalNavigationService),
    ],
  });

  beforeEach(() => {
    spectator = createHost(
      `<kirby-page title="${titleText}" subtitle="${subtitleText}">
        <kirby-page-content>
          ${dummyContent}
        </kirby-page-content>
      </kirby-page>`
    );
    zone = spectator.inject(NgZone);
    ionToolbar = spectator.queryHost('ion-toolbar');
    tabBar = spectator.inject(TabsComponent);
    ionContent = spectator.queryHost('ion-content');
    modalNavigationService = spectator.inject(ModalNavigationService);
    modalNavigationService.isModalRoute.and.returnValue(false);
    router = spectator.inject(Router);
  });

  describe('having a title and subtitle', () => {
    it('should have the configured title', async () => {
      await TestHelper.whenReady(ionContent);
      const pageTitleHeading = ionContent.querySelector('.page-title > h1');

      expect(spectator.component.title).toEqual(titleText);
      expect(pageTitleHeading).toHaveText(titleText, true);
    });

    it('should render title with correct margin and padding', async () => {
      await TestHelper.whenReady(ionContent);
      const pageTitle = ionContent.querySelector('.page-title');
      const pageTitleHeading = pageTitle.querySelector(':scope > h1');

      expect(pageTitle).toHaveComputedStyle({
        'margin-left': '0px',
        'margin-right': '0px',
        'margin-top': '0px',
        'margin-bottom': '0px',
        'padding-left': '0px',
        'padding-right': '0px',
        'padding-top': '0px',
        'padding-bottom': '0px',
      });
      expect(pageTitleHeading).toHaveComputedStyle({
        'margin-left': '0px',
        'margin-right': '0px',
        'margin-top': '0px',
        'margin-bottom': '0px',
        'padding-left': '0px',
        'padding-right': '0px',
        'padding-top': '0px',
        'padding-bottom': '0px',
      });
    });

    it('should have the configured subtitle', async () => {
      await TestHelper.whenReady(ionContent);
      const pageSubtitle = ionContent.querySelector('.page-subtitle');

      expect(spectator.component.subtitle).toEqual(subtitleText);
      expect(pageSubtitle).toHaveText(subtitleText, true);
    });

    it('should render subitle with correct margin and padding', async () => {
      await TestHelper.whenReady(ionContent);
      const pageSubtitle = ionContent.querySelector('.page-subtitle');

      expect(pageSubtitle).toHaveComputedStyle({
        'margin-left': '0px',
        'margin-right': '0px',
        'margin-top': size('xxs'),
        'margin-bottom': '0px',
        'padding-left': '0px',
        'padding-right': '0px',
        'padding-top': '0px',
        'padding-bottom': '0px',
      });
    });
  });

  it('should render toolbar with correct padding', async () => {
    await TestHelper.whenReady(ionToolbar);
    const toolbarContainer = ionToolbar.shadowRoot.querySelector('.toolbar-container');
    expect(toolbarContainer).toBeTruthy();
    expect(toolbarContainer).toHaveComputedStyle({
      'padding-left': size('xxxs'),
      'padding-right': size('xxxs'),
      'padding-top': '0px',
      'padding-bottom': '0px',
    });
  });

  it('should render back button with correct size', async () => {
    await TestHelper.whenReady(ionToolbar);
    const ionBackButton = spectator.queryHost('ion-toolbar ion-buttons ion-back-button');
    expect(ionBackButton).toHaveComputedStyle({
      width: fatFingerSize,
      height: fatFingerSize,
    });
  });

  it('should hide tab bar when tabBarBottomHidden is true', fakeAsync(() => {
    expect(tabBar.tabBarBottomHidden).toBe(false);

    spectator.setInput('tabBarBottomHidden', true);
    spectator.detectChanges();
    tick();

    expect(tabBar.tabBarBottomHidden).toBe(true);
  }));

  it('should show tab bar when tabBarBottomHidden is false', fakeAsync(() => {
    // hide tab bar
    spectator.setInput('tabBarBottomHidden', true);
    spectator.detectChanges();
    tick();
    expect(tabBar.tabBarBottomHidden).toBe(true);

    // show tab bar
    spectator.setInput('tabBarBottomHidden', false);
    spectator.detectChanges();
    tick();

    expect(tabBar.tabBarBottomHidden).toBe(false);
  }));

  it('should show tab bar when tabBarBottomHidden is true on leave', fakeAsync(async () => {
    spectator.setInput('tabBarBottomHidden', true);
    tick();
    expect(tabBar.tabBarBottomHidden).toBe(true);

    await triggerOnLeave(router);

    expect(tabBar.tabBarBottomHidden).toBe(false);
    flush();
  }));

  describe('pull-to-refresh', () => {
    it('should be available when "refresh" is subscribed to', () => {
      spectator.output('refresh').subscribe(() => {});
      spectator.detectComponentChanges();
      expect(spectator.query(IonRefresher)).not.toBeNull();
    });

    it('should not be available when "refresh" is not subscribed to', () => {
      expect(spectator.query(IonRefresher)).toBeNull();
    });
  });

  async function triggerOnLeave(router: SpyObject<Router>) {
    await zone.run(() => router.navigate(['someUrl']));
  }
});