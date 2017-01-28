"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ShoppingListComponent = (function () {
    function ShoppingListComponent(sls) {
        this.sls = sls;
        this.items = [];
        this.selectedItem = null;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.items = this.sls.getItems();
    };
    ShoppingListComponent.prototype.onSelectItem = function (item) {
        this.selectedItem = item;
    };
    ShoppingListComponent.prototype.onCleared = function () {
        this.selectedItem = null;
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list',
            templateUrl: './shopping-list.component.html',
            styleUrls: ['./shopping-list.component.css']
        })
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map