import { Component } from '@angular/core';
import { Product } from "../../product";
import { ProductsService } from "../products.service";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = []; // here we defined a place where we want to push all list of products.It will be an array.

  constructor(
    private productsService: ProductsService, // a new service for our products
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts(); // this empty products array equal to all products
    this.productsService.productChanged.subscribe(
      (products: Product[]) => this.products = products
  )
  }
}
