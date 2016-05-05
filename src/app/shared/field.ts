import {Component, Input} from '@angular/core';
import {Control} from '@angular/common';

@Component({
  selector: 'field',
  template: `
    <div class="form-group" [ngClass]="{'has-error': control.errors && control.touched}">
      <ng-content></ng-content>
			<div class="help-block" *ngIf="control.errors && control.touched">
				{{control.errors | json}}
			</div>
		</div>
  `,
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class Field {
  @Input('control') control: Control;
}
