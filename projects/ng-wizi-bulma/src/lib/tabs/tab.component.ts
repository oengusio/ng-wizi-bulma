import { Component, Input } from '@angular/core';

@Component({
    selector: 'nwb-tab',
    template: `
    @if (isSelected) {
      <ng-content>
      </ng-content>
    }
    `,
    standalone: false
})
export class NwbTabComponent {
  @Input()
  label: string;
  @Input()
  icon: string;
  index: number;

  isSelected: boolean;

  setSelected(isSelected: boolean) {
    this.isSelected = isSelected;
  }
}
