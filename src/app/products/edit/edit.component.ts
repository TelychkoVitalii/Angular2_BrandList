/*
  Via edit component we can create new form and edit old form. Edit old form we can with routerId
*/

import { Component, OnDestroy, OnInit, style, state, animate, transition, trigger } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products.service";
import { Subscription } from "rxjs";
import { Product } from "../../product";
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations: [
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(500)
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
export class EditComponent implements OnInit, OnDestroy {
  private productIndex: number; // productId
  private product: Product; // this is an old product which we will want to edit
  private isNew = true; // variable to create new form
  private subscription: Subscription;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private formbuilder: FormBuilder,
              private router: Router) { }


  /*
    If our route has an id we can edit this id route. If not, so this product is new.
   */
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.productIndex = +params['id'];
          this.product = this.productsService.getProduct(this.productIndex);
        } else {
          this.isNew = true;
          this.product = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newProduct = this.productForm.value;
    if(this.isNew) {
      this.productsService.addProduct(newProduct);
    } else {
      this.productsService.editProduct(this.product, newProduct);
    }
    // this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, amount: string) {
    (<FormArray>this.productForm.controls['items']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [
          Validators.required,
          Validators.pattern("\\d+")
        ])
      })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.productForm.controls['items']).removeAt(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']); // navigate to one step before
  }

  private initForm() {
    let productTitle = '';
    let productDescription = '';
    let productPrice = '';
    let productImage = '';
    let productItems: FormArray = new FormArray([]);
    if (!this.isNew) {
      for (let i = 0; i < this.product.items.length; i++) {
        productItems.push(
          new FormGroup({
            name: new FormControl(this.product.items[i].name, Validators.required),
            amount: new FormControl(this.product.items[i].amount, [
              Validators.required, Validators.pattern("\\d+")
            ])
          })
        );
      }
        productTitle = this.product.title;
        productDescription = this.product.description;
        productPrice = this.product.price;
        productImage = this.product.image;
    }

      this.productForm = this.formbuilder.group({
        title: [productTitle, Validators.required],
        description: [productDescription, Validators.required],
        price: [productPrice, Validators.required],
        image: [productImage, Validators.required],
        items: productItems
      });
    }
}
