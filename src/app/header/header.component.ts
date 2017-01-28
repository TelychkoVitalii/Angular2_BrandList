import { Component } from '@angular/core';
import { ProductsService } from "../products/products.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private productsService: ProductsService) {}

  onStore() {
    return this.productsService.storeData()
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      )
  }

  onFetch() {
    return this.productsService.fetchData();
  }
}
