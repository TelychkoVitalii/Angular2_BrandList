import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { ProductsService } from "./products/products.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { EditComponent } from './products/edit/edit.component';
import { ProductsStartComponent } from './products/products-start.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule,
      ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    HeaderComponent,
    ProductsComponent,
    ProductItemComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    EditComponent,
    ProductsStartComponent,
  ],

  providers: [ProductsService, ShoppingListService],
  bootstrap: [AppComponent]
})

export class AppModule { }
