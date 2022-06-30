import { Component } from '@angular/core';

import { BasePageExampleComponent } from '../base-page-example.component';

@Component({
  templateUrl: 'page-simple-example.component.html',
})
export class PageSimpleExampleComponent extends BasePageExampleComponent {
  static readonly template = '';

  enter() {
    console.log('Enter Simple');
  }

  leave() {
    console.log('Leave  Simple');
  }
}
