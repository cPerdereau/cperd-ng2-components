"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SearchBarComponent = (function () {
    function SearchBarComponent() {
        this.output = new core_1.EventEmitter();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.ngOnChanges = function () {
    };
    SearchBarComponent.prototype.emitValue = function () {
        this.output.emit(this.search);
    };
    return SearchBarComponent;
}());
__decorate([
    core_1.Input('placeholder')
], SearchBarComponent.prototype, "placeholder");
__decorate([
    core_1.Output()
], SearchBarComponent.prototype, "output");
SearchBarComponent = __decorate([
    core_1.Injectable(),
    core_1.Component({
        selector: 'search-bar-component',
        changeDetection: core_1.ChangeDetectionStrategy.Default,
        styleUrls: ['./searchbar.scss'],
        /* tslint:disable */ template: "\n  <div><i class=\"material-icons\">search</i><input type=\"text\" [(ngModel)]=\"search\" (keyup)=\"emitValue();\" [placeholder]=\"placeholder\"></div>"
        /* tslint:enable */
    })
], SearchBarComponent);
exports.SearchBarComponent = SearchBarComponent;
