"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
/**
 * Transforms any input value
 */
var FilterByPipe = (function () {
    function FilterByPipe() {
    }
    FilterByPipe.prototype.transform = function (items, filter, prop) {
        if (prop === void 0) { prop = null; }
        if (!items || !filter) {
            return items;
        }
        var props = Object.keys(items[0]);
        var newArray = [];
        for (var i = 0; i < items.length; i++) {
            var check = 0;
            if (prop != null || prop !== '') {
                var val = items[i][prop];
                if (!(typeof val === 'object') && !Array.isArray(val)) {
                    if (val.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                        check++;
                    }
                }
            }
            else {
                for (var j = 0; j < props.length; j++) {
                    var val = items[i][props[j]];
                    if (!(typeof val === 'object') && !Array.isArray(val)) {
                        if (val.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                            check++;
                        }
                    }
                }
            }
            if (check > 0) {
                newArray.push(items[i]);
            }
        }
        return newArray;
    };
    return FilterByPipe;
}());
FilterByPipe = __decorate([
    core_1.Pipe({
        name: 'filterBy'
    }),
    core_1.Injectable()
], FilterByPipe);
exports.FilterByPipe = FilterByPipe;
