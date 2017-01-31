import { Routes, RouterModule } from '@angular/router';
import { ProductsStartComponent } from "./products-start.component";
import { EditComponent } from "./edit/edit.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products.component";

const Products_routes: Routes = [
  {path: '', component: ProductsComponent, children: [
  {path: '', component: ProductsStartComponent},
  {path: 'new', component: EditComponent},
  {path: ':id', component: ProductDetailComponent},
  {path: ':id/edit', component: EditComponent}
  ]}
];

export const productsRouting = RouterModule.forChild(Products_routes);

