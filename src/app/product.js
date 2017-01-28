"use strict";
var Product = (function () {
    function Product(id, title, description, price, image, items) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.items = items;
    }
    ;
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map