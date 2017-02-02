import {Injectable, EventEmitter} from '@angular/core';
import { Product } from "../product";
import { Item } from "../items";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ProductsService {
  productChanged = new EventEmitter<Product[]>();

  products: Product[] = [
      new Product(1, 'ZARA', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '200$', 'https://s24.postimg.org/68swdslut/4886279401_2_1_1.jpg',
                 [new Item('Poliester', 30)]),
      new Product(2, 'BERSHKA', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '100$', 'https://s29.postimg.org/wrox803br/5908454800_1_2_4.jpg',
                 [new Item('Poliester', 30)]),
      new Product(3, 'H&M',
                     'Long dress in printed chiffon. Model with thin straps, wide ruffle at the top and cut and elastic at the waist. Wide skirt, with lace inserts and partially lined.', '100$', 'https://s29.postimg.org/uiy5lxg7b/hmprod.jpg',
                 [new Item('Poliester', 30)]),
      new Product(4, 'MANGO', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '50$', 'https://s24.postimg.org/fcwp1py0l/0340470401_1_1_1.jpg',
                 [new Item('Poliester', 30)]),
      new Product(5, 'VICTORIA`S SECRET', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '400$', 'https://s29.postimg.org/74xzr8c13/V597698.jpg',
                 [new Item('Poliester', 30)]),
      new Product(6, 'PINK', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '500$', 'https://s24.postimg.org/83gbeqyyt/V599008.jpg',
                 [new Item('Poliester', 30)]),
      new Product(7, 'OLD NAVY', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '100$', 'https://s27.postimg.org/nn1vlg1tf/7629558800_1_1_1.jpg',
                 [new Item('Poliester', 30)]),
      new Product(8, 'STRADEVARIUS', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '290$', 'https://s23.postimg.org/6kdzjmt97/3427267505_2_1_1.jpg',
                 [new Item('Poliester', 30)]),
      new Product(9, 'COTTON', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '590$', 'https://s28.postimg.org/ienizbqa5/0722344250_1_1_1.jpg',
                 [new Item('Poliester', 30)]),
      new Product(10, 'MASSIMO DUTTI', 'Long, lightly cushioned jacket in hooded fabric. Zip closure on the front that extends through the edge of the hood, chest pocket with zip and side pockets with visor and button. Zipped sleeve pocket, one inside pocket and ribbed cuffs. Padded lining.', '600$', 'https://s30.postimg.org/4d97ksy69/5723549250_1_1_1.jpg',
                 [new Item('Poliester', 30)]),
  ];

  constructor(private http: Http) {}

  getProducts() {
    return this.products; // method to return all products
  }

  getProduct(id: number) { // method to access to product id
    return this.products[id];
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  editProduct(oldProduct: Product, newProduct: Product) {
    this.products[this.products.indexOf(oldProduct)] = newProduct;
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
  }

  // storeData() {
  //   const body = JSON.stringify(this.products);
  //   const headers = new Headers({
  //   'Content-Type': 'application/json'
  //   });
  //   return this.http.put('https://angular2productlist.firebaseio.com/products.json', body, {
  //     headers: headers
  //   });
  // }
  //
  // fetchData() {
  //   return this.http.get('https://angular2productlist.firebaseio.com/products.json')
  //     .map((data: Response) => data.json())
  //     .subscribe(
  //       (data: Product[]) => {
  //         this.products = data;
  //         this.productChanged.emit(this.products);
  //       }
  //     )
  // }
}
