"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var product_1 = require("../product");
var items_1 = require("../items");
var http_1 = require("@angular/http");
require('rxjs/Rx');
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
        this.productChanged = new core_1.EventEmitter();
        this.products = [
            new product_1.Product(1, 'ZARA', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '200$', 'https://s24.postimg.org/68swdslut/4886279401_2_1_1.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(2, 'BERSHKA', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '100$', 'https://s29.postimg.org/wrox803br/5908454800_1_2_4.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(3, 'H&M', 'Long dress in printed chiffon. Model with thin straps, wide ruffle at the top and cut and elastic at the waist. Wide skirt, with lace inserts and partially lined.', '100$', 'https://s29.postimg.org/uiy5lxg7b/hmprod.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(4, 'MANGO', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '50$', 'https://s24.postimg.org/fcwp1py0l/0340470401_1_1_1.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(5, 'VICTORIA`S SECRET', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '400$', 'https://s29.postimg.org/74xzr8c13/V597698.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(6, 'PINK', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '500$', 'https://s24.postimg.org/83gbeqyyt/V599008.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(7, 'OLD NAVY', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '100$', 'https://s27.postimg.org/nn1vlg1tf/7629558800_1_1_1.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(8, 'STRADEVARIUS', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '290$', 'https://s23.postimg.org/6kdzjmt97/3427267505_2_1_1.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(9, 'COTTON', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '590$', 'https://s28.postimg.org/ienizbqa5/0722344250_1_1_1.jpg', [new items_1.Item('Poliester', 30)]),
            new product_1.Product(10, 'MASSIMO DUTTI', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '600$', 'https://s30.postimg.org/4d97ksy69/5723549250_1_1_1.jpg', [new items_1.Item('Poliester', 30)]),
        ];
    }
    ProductsService.prototype.getProducts = function () {
        return this.products;
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.products[id];
    };
    ProductsService.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductsService.prototype.editProduct = function (oldProduct, newProduct) {
        this.products[this.products.indexOf(oldProduct)] = newProduct;
    };
    ProductsService.prototype.deleteProduct = function (product) {
        this.products.splice(this.products.indexOf(product), 1);
    };
    ProductsService.prototype.storeData = function () {
        var body = JSON.stringify(this.products);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://angular2productlist.firebaseio.com/products.json', body, {
            headers: headers
        });
    };
    ProductsService.prototype.fetchData = function () {
        var _this = this;
        return this.http.get('https://angular2productlist.firebaseio.com/products.json')
            .map(function (data) { return data.json(); })
            .subscribe(function (data) {
            _this.products = data;
            _this.productChanged.emit(_this.products);
        });
    };
    ProductsService = __decorate([
        core_1.Injectable()
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map