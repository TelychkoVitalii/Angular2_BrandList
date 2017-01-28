"use strict";
require('./polyfills.ts');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var environment_1 = require('./environments/environment');
var _1 = require('./app/');
var shopping_list_service_1 = require("./app/shopping-list/shopping-list.service");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule, [shopping_list_service_1.ShoppingListService]);
//# sourceMappingURL=main.js.map