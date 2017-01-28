import { Component } from '@angular/core';
import { Product } from "../../product";
import { ProductsService } from "../products.service";


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsService.productChanged.subscribe(
      (products: Product[]) => this.products = products
  )
  }
}
