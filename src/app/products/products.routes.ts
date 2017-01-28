import { Routes } from '@angular/router';
import { ProductsStartComponent } from "./products-start.component";
import { EditComponent } from "./edit/edit.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const Products_routes: Routes = [
  {path: '', component: ProductsStartComponent},
  {path: 'new', component: EditComponent},
  {path: ':id', component: ProductDetailComponent},
  {path: ':id/edit', component: EditComponent}
];

