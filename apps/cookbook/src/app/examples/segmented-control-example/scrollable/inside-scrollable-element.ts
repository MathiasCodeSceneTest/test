import { Component, OnInit } from '@angular/core';

import { SegmentItem } from '@kirbydesign/designsystem';

const config = {
  template: `<div style="width: 100%; max-width: 500px; overflow-x: scroll; display: flex; align-items: center; --kirby-segmented-control-overflow-x: visible;">
    <button kirby-button>Option 1</button>
    <button kirby-button [attentionLevel]="'2'">Option 2</button>
    <kirby-segmented-control
        [items]="items"
        [value]="selectedSegment"
        [scrollable]="true"
    ></kirby-segmented-control>
</div>`,
};

@Component({
  selector: 'cookbook-segmented-control-example-inside-scrollable',
  template: config.template,
})
export class SegmentedControlExampleInsideScrollableComponent implements OnInit {
  selectedSegment: SegmentItem;
  template: string = config.template;

  items: SegmentItem[] = [
    {
      text: 'First item',
      id: 'first',
    },
    {
      text: 'Second item',
      id: 'second',
    },
    {
      text: 'Third item',
      id: 'third',
    },
    {
      text: 'Fourth item',
      id: 'fourth',
    },
    {
      text: 'Fifth item',
      id: 'fifth',
    },
    {
      text: 'Sixth item',
      id: 'sixth',
    },
    {
      text: 'Seventh item',
      id: 'seventh',
    },
    {
      text: 'Eighth item',
      id: 'eighth',
    },
  ];

  ngOnInit(): void {
    this.selectedSegment = this.items[0];
  }
}
