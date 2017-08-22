import {
  ChangeDetectionStrategy, Component, EventEmitter, Injectable, Input, OnChanges, OnInit,
  Output
} from '@angular/core';
@Injectable()
@Component({
  selector: 'search-bar-component',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./searchbar.scss'],
  /* tslint:disable */ template: `
  <div><i class="material-icons">search</i><input type="text" [(ngModel)]="search" (keyup)="emitValue();" [placeholder]="placeholder"></div>`
  /* tslint:enable */
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Input('placeholder') placeholder;
  @Output() output = new EventEmitter();
  search;
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  emitValue() {
    this.output.emit(this.search);
  }
}
