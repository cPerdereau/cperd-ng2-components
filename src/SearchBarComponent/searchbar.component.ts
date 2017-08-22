import {ChangeDetectionStrategy, Component, Injectable, Input, OnChanges, OnInit} from '@angular/core';
@Injectable()
@Component({
  selector: 'search-bar-component',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./searchbar.scss'],
  template: `
  <div><i class="material-icons">search</i><input type="text" [placeholder]="placeholder"></div>`
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Input('placeholder') placeholder;
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }
}
