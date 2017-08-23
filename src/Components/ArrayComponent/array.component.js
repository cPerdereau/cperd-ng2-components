"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ArrayComponent = (function () {
    function ArrayComponent() {
        this.title = 'Titre de la page';
    }
    ArrayComponent.prototype.ngOnInit = function () {
        this.props = Object.keys(this.data[0]);
        this.body = this.data;
        if (this.indice !== true) {
            this.indice = false;
        }
    };
    ArrayComponent.prototype.ngOnChanges = function () {
        this.body = this.data;
    };
    return ArrayComponent;
}());
__decorate([
    core_1.Input('data')
], ArrayComponent.prototype, "data");
__decorate([
    core_1.Input('header')
], ArrayComponent.prototype, "header");
__decorate([
    core_1.Input('title')
], ArrayComponent.prototype, "title");
__decorate([
    core_1.Input('indice')
], ArrayComponent.prototype, "indice");
ArrayComponent = __decorate([
    core_1.Injectable(),
    core_1.Component({
        selector: 'array-component',
        changeDetection: core_1.ChangeDetectionStrategy.Default,
        styleUrls: ['./array.scss'],
        template: "<div><h2>{{ title }}</h2>\n <table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <td *ngIf=\"indice\">Classement</td><td *ngFor=\"let content of header\">{{ content }}</td>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let content of body; let i = index\">\n    <td *ngIf=\"indice\">{{i+1}}</td><td *ngFor=\"let prop of props\">{{ content[prop] }}</td>\n  </tr>\n  </tbody>\n</table></div>"
    })
], ArrayComponent);
exports.ArrayComponent = ArrayComponent;
