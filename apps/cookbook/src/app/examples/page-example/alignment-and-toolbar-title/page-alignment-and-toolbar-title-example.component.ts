import { Component } from '@angular/core';

import { BasePageExampleComponent } from '../base-page-example.component';

const config = {
  template: `<kirby-page
  (enter)="enter()"
  (leave)="leave()"
  titleAlignment="center"
  title="Centered Title"
  subtitle="Centered Subtitle"
  toolbarTitle="A Different Title" defaultBackHref="/">
  <kirby-page-content>
    <button kirby-button routerLink="../simple3">Next Page</button>
    <div [innerHTML]="content"></div>
  </kirby-page-content>
</kirby-page>`,
};
@Component({
  template: config.template,
})
export class PageAlignmentAndToolbarTitleExampleComponent extends BasePageExampleComponent {
  static readonly template = config.template
    .replace(' defaultBackHref="/"', '')
    .replace('<div [innerHTML]="content"></div>', '...');

  constructor() {
    super();
  }

  enter() {
    console.log('Enter Other');
  }

  leave() {
    console.log('Leave  Other');
  }
}
