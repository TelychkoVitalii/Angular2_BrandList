import { Component } from '@angular/core';
import { ProductsService } from "../products/products.service";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;

  constructor(private productsService: ProductsService, private authService: AuthService, private router: Router,
              private sls: ShoppingListService) {
    this.authService.isAuthenticated().subscribe(
            authStatus => this.isAuthenticated = authStatus
    );
  }

  // onStore() {
  //   return this.productsService.storeData()
  //     .subscribe(
  //       data => console.log(data),
  //       error => console.log(error)
  //     )
  // }
  //
  // onFetch() {
  //   return this.productsService.fetchData();
  // }

  isAuth() {
    return this.isAuthenticated;
  }

  onProfile() {
    this.router.navigate(['profile']);
  }

  onSet() {
    this.router.navigate(['settings']);
  }
  onLogout() {
    this.authService.logout();
  }
}
