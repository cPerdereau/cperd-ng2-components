import {ChangeDetectionStrategy, Component, Injectable, OnChanges, OnInit} from '@angular/core';
@Injectable()
@Component({
  selector: 'search-bar-component',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./searchbar.scss'],
  template: `
  <div><i class="material-icons">Search</i><input type="text"></div>`
})
export class SearchBarComponent implements OnInit, OnChanges {
  constructor() {
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }
}
