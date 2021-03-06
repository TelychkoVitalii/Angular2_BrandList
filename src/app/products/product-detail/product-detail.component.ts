import { Component, OnDestroy, style, state, animate, transition, trigger } from '@angular/core';
import { Product } from "../../product";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ProductsService } from "../products.service";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(400)
      ]),
      transition('* => void', [
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class ProductDetailComponent {
  selectedProduct: Product;
  private subscription: Subscription;
  private productIndex: number;

  constructor(private sls: ShoppingListService,
              private route: ActivatedRoute,
              private productsService: ProductsService,
              private router: Router) { }

  /* we subscribe on Activated route where we extracted params id and say that all selectedProducts we want
      to receive by its own id
  */
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.productIndex = params['id'];
        this.selectedProduct = this.productsService.getProduct(this.productIndex);
      }
    );
  }

  addToShoppingList() {
    this.sls.addItems(this.selectedProduct.items);
  }

  onEdit() {
    this.router.navigate(['/list', this.productIndex, 'edit']);
  }

  onDelete() {
    let deleteModal = confirm('Do you really want to delete this product?');
    if(deleteModal === true) {
      this.productsService.deleteProduct(this.selectedProduct);
      this.router.navigate(['/list']);
    } else {
      return false;
    }
  }

  // destroy subscription
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
