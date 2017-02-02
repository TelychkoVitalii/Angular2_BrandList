// This file host all modules, services, directives, pipes and bootstrap our root AppComponent

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
import { ReactiveFormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SignUpComponent } from "./auth/signUp/sign-up.component";
import { SignInComponent } from "./auth/signIn/sign-in.component";

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      routing,
      ShoppingListModule,
      HttpModule,
      ReactiveFormsModule
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    SettingsComponent
  ],

  providers: [ProductsService, ShoppingListService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
