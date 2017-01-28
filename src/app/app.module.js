"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require('./app.component');
var product_list_component_1 = require("./products/product-list/product-list.component");
var product_detail_component_1 = require("./products/product-detail/product-detail.component");
var header_component_1 = require('./header/header.component');
var products_component_1 = require('./products/products.component');
var product_item_component_1 = require('./products/product-list/product-item/product-item.component');
var shopping_list_component_1 = require('./shopping-list/shopping-list.component');
var shopping_list_add_component_1 = require('./shopping-list/shopping-list-add/shopping-list-add.component');
var dropdown_directive_1 = require('./dropdown.directive');
var products_service_1 = require("./products/products.service");
var shopping_list_service_1 = require("./shopping-list/shopping-list.service");
var edit_component_1 = require('./products/edit/edit.component');
var products_start_component_1 = require('./products/products-start.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                header_component_1.HeaderComponent,
                products_component_1.ProductsComponent,
                product_item_component_1.ProductItemComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_list_add_component_1.ShoppingListAddComponent,
                dropdown_directive_1.DropdownDirective,
                edit_component_1.EditComponent,
                products_start_component_1.ProductsStartComponent,
            ],
            providers: [products_service_1.ProductsService, shopping_list_service_1.ShoppingListService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map