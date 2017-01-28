import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products.service";
import { Subscription } from "rxjs";
import { Product } from "../../product";
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  private productIndex: number;
  private product: Product;
  private isNew = true;
  private subscription: Subscription;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private formbuilder: FormBuilder,
              private router: Router) { }

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
    this.navigateBack();
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
    this.router.navigate(['../']);
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
