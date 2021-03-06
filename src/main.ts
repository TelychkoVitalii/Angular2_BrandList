// main file which bootstrap our root AppModule

import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { ShoppingListService } from "./app/shopping-list/shopping-list.service";
import { AuthService } from "./app/auth.service";
import { AuthGuard } from "./app/auth.guard";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [ShoppingListService, AuthService, AuthGuard]);

