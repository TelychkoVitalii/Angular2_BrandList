import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from "./products/products.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { Products_routes } from "./products/products.routes";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ProductsComponent, children: Products_routes },
  { path: 'shopping-list', component: ShoppingListComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
