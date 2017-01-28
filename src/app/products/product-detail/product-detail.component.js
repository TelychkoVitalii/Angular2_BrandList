"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(sls, route, productsService, router) {
        this.sls = sls;
        this.route = route;
        this.productsService = productsService;
        this.router = router;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.productIndex = params['id'];
            _this.selectedProduct = _this.productsService.getProduct(_this.productIndex);
        });
    };
    ProductDetailComponent.prototype.addToShoppingList = function () {
        this.sls.addItems(this.selectedProduct.items);
    };
    ProductDetailComponent.prototype.onEdit = function () {
        this.router.navigate(['/list', this.productIndex, 'edit']);
    };
    ProductDetailComponent.prototype.onDelete = function () {
        var deleteModal = confirm('Do you really want to delete this product?');
        if (deleteModal === true) {
            this.productsService.deleteProduct(this.selectedProduct);
            this.router.navigate(['/list']);
        }
        else {
            return false;
        }
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.css']
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map