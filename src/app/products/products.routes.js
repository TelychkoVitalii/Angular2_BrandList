"use strict";
var products_start_component_1 = require("./products-start.component");
var edit_component_1 = require("./edit/edit.component");
var product_detail_component_1 = require("./product-detail/product-detail.component");
exports.Products_routes = [
    { path: '', component: products_start_component_1.ProductsStartComponent },
    { path: 'new', component: edit_component_1.EditComponent },
    { path: ':id', component: product_detail_component_1.ProductDetailComponent },
    { path: ':id/edit', component: edit_component_1.EditComponent }
];
//# sourceMappingURL=products.routes.js.map