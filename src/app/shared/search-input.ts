import {Component, Input, ElementRef, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'search-input',
  template: `<input type="text" class="form-control" [placeholder]="placeholder">`,
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class SearchInput {
  @Input() placeholder: string = 'Search ...';
  @Output() onSearch = new EventEmitter<string>();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .debounceTime(500)
      .subscribe((value: string) => {
        this.onSearch.next(value);
      });
  }
}
