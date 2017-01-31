import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { ProductsService } from "./products/products.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { HomeComponent } from './home.component';
import { AuthService } from "./auth.service";
import { SignUpComponent } from './auth/sign-up.component';
import { SignInComponent } from './auth/sign-in.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      routing,
      ShoppingListModule,
      ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
    SignUpComponent,
    SignInComponent
  ],

  providers: [ProductsService, ShoppingListService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
