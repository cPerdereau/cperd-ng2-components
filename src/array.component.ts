import {ChangeDetectionStrategy, Component, Injectable, Input, OnChanges, OnInit} from '@angular/core';
@Injectable()
@Component({
  selector: 'array-component',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `<h1>{{ title }}</h1>
 <table class="table table-hover">
  <thead>
  <tr>
    <td *ngFor="let content of header">{{ content }}</td>
  </thead>
  <tbody>
  <tr *ngFor="let content of body; let i = index">
    <td>{{i+1}}</td>
    <td *ngFor="let prop of props">{{ content[prop] }}</td>
  </tr>
  </tbody>
</table>`
})
export class ArrayComponent implements OnInit, OnChanges {
  @Input('data') data;
  @Input('header') header;
  @Input('title') title;
  body;
  props;
  constructor() {
  }

  ngOnInit() {
    this.props = Object.keys(this.data[0]);
    this.body = this.data;
  }
  ngOnChanges() {
    this.props = Object.keys(this.data[0]);
    this.body = this.data;
  }
}
