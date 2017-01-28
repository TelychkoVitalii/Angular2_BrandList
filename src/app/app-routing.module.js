"use strict";
var router_1 = require('@angular/router');
var products_component_1 = require("./products/products.component");
var shopping_list_component_1 = require("./shopping-list/shopping-list.component");
var products_routes_1 = require("./products/products.routes");
var routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: products_component_1.ProductsComponent, children: products_routes_1.Products_routes },
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent }
];
exports.AppRoutingModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map