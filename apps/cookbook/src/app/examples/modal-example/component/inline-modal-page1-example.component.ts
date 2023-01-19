import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cookbook-embedded-modal-example',
  template: `
    <p>This is page 1</p>
    <p>{{ queryParams$ | async | json }}</p>
    <a [routerLink]="'../page2'">Go to page 2!!</a>
  `,
})
export class InlineModalPage1ExampleComponent {
  constructor(private route: ActivatedRoute) {}
  queryParams$ = this.route.queryParams;
}
