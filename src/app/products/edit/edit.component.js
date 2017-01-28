"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var EditComponent = (function () {
    function EditComponent(route, productsService, formbuilder, router) {
        this.route = route;
        this.productsService = productsService;
        this.formbuilder = formbuilder;
        this.router = router;
        this.isNew = true;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.isNew = false;
                _this.productIndex = +params['id'];
                _this.product = _this.productsService.getProduct(_this.productIndex);
            }
            else {
                _this.isNew = true;
                _this.product = null;
            }
            _this.initForm();
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var newProduct = this.productForm.value;
        if (this.isNew) {
            this.productsService.addProduct(newProduct);
        }
        else {
            this.productsService.editProduct(this.product, newProduct);
        }
        this.navigateBack();
    };
    EditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    EditComponent.prototype.onAddItem = function (name, amount) {
        this.productForm.controls['items'].push(new forms_1.FormGroup({
            name: new forms_1.FormControl(name, forms_1.Validators.required),
            amount: new forms_1.FormControl(amount, [
                forms_1.Validators.required,
                forms_1.Validators.pattern("\\d+")
            ])
        }));
    };
    EditComponent.prototype.onRemoveItem = function (index) {
        this.productForm.controls['items'].removeAt(index);
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EditComponent.prototype.navigateBack = function () {
        this.router.navigate(['../']);
    };
    EditComponent.prototype.initForm = function () {
        var productTitle = '';
        var productDescription = '';
        var productPrice = '';
        var productImage = '';
        var productItems = new forms_1.FormArray([]);
        if (!this.isNew) {
            for (var i = 0; i < this.product.items.length; i++) {
                productItems.push(new forms_1.FormGroup({
                    name: new forms_1.FormControl(this.product.items[i].name, forms_1.Validators.required),
                    amount: new forms_1.FormControl(this.product.items[i].amount, [
                        forms_1.Validators.required, forms_1.Validators.pattern("\\d+")
                    ])
                }));
            }
            productTitle = this.product.title;
            productDescription = this.product.description;
            productPrice = this.product.price;
            productImage = this.product.image;
        }
        this.productForm = this.formbuilder.group({
            title: [productTitle, forms_1.Validators.required],
            description: [productDescription, forms_1.Validators.required],
            price: [productPrice, forms_1.Validators.required],
            image: [productImage, forms_1.Validators.required],
            items: productItems
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        })
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map