import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'array-component',
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
export class ArrayComponent implements OnInit {
  @Input('data') data;
  @Input('header') header;
  @Input('title') title;
  body;
  props;
  constructor() {
    console.log('test');
  }

  ngOnInit() {
    this.props = Object.keys(this.data[0]);
    this.body = this.data;
  }
}
