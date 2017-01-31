import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products.component";
import { ProductItemComponent } from "./product-list/product-item/product-item.component";
import { EditComponent } from "./edit/edit.component";
import { ProductsStartComponent } from "./products-start.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { productsRouting } from "./products-routing";

@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductsComponent, ProductItemComponent, EditComponent, ProductsStartComponent],
  imports: [ReactiveFormsModule, CommonModule, productsRouting]
})

export class ProductsModule {}
